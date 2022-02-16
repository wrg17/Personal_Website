<script lang="ts">
	import '../lib/components/Header.svelte';
		import { onMount } from 'svelte';
		import { fade } from 'svelte/transition';
		import { theme } from '$lib/stores';
		import { page } from '$app/stores';
		import '../app.css';
		import Header from '../lib/components/Header.svelte';


		const THEME = 'theme';
		let isSidebarOpen = false;
		let scrollYPos;
		let current = null;
		let isLoading = true;

		onMount(async () => {
			const last_theme = localStorage.getItem(THEME);
			theme.set(last_theme === null ? 'light' : last_theme);
			await new Promise(res => setTimeout(() => isLoading = false, 1500));
		});

		$: {
			switch ($page.url.pathname) {
				case '/':
					current = 'home';
					break;
				case '/hobbies':
					current = 'hobbies';
					break;
				case '/projects':
					current = 'projects';
					break;
				case '/etc':
					current = 'etc';
					break;
				default:
					console.log('unknown page');
			}
		}
		const fadeTime = 250;
		let activeItem = 'home';
		const contentChange = (e) => {
			current = e.detail
		}
</script>

<svelte:head>
    <link rel="stylesheet" href={`theme/${$theme}.css`} />
    <title>William George</title>
</svelte:head>
<svelte:window bind:scrollY={scrollYPos} />

<div in:fade="{{duration: 800}}" class="background">

    <Header {current} on:contentChange={contentChange}/>
    <!-- Page content-->
    <div class="panel">
        <div class="panel-content">Hello There</div>
    </div>

    <div class="content">
        <div>
            <slot></slot>
        </div>
    </div>
</div>

<style>
    .panel {
        position: relative;
        background: inherit;
        top: 500px;
        left: 1000px;
        width: 250px;
        height: 350px;
        overflow: hidden;
    }

    .panel:before{
        content: " ";
        background: inherit;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        box-shadow: inset 0 0 0 3000px rgba(255, 255, 255, 0.2);
        filter: blur(10px);
    }

    .panel-content {
        position: absolute;
    }

    .background {
        transition: background-color 0.3s;
        background-color: var(--color-background);
    }

    .content {
        margin: 20% 10%;
        height: 100%;
        flex: 1 0 auto;
        text-align: center;
        horiz-align: center;
    }

</style>