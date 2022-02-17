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

		$: {
			let curr_page = $page.url.pathname
			if (curr_page === '/') {
				current = 'home'
			} else {
				current = curr_page.replace('/', '')
			}
		}
</script>

<svelte:head>
    <link rel="stylesheet" href={`theme/${$theme}.css`} />
    <title>William George</title>
</svelte:head>
<svelte:window bind:scrollY={scrollYPos} />

<body>
    <div in:fade="{{duration: 800}}" class="background">

        <Header {current} on:contentChange={contentChange}/>
        <!-- Page content-->
        <!--<div class="panel">
            <div class="panel-content">Hello There</div>
        </div>-->

        <div class="content">
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</body>


<style>
    .background {
        //transition: background-color 0.3s;
        background-color: var(--color-background);
    }

    .content {
        position: relative;
        margin: 20% 10%;
        height: 100%;
        flex: 1 0 auto;
        text-align: center;
        horiz-align: center;
        z-index: 1;
    }

</style>