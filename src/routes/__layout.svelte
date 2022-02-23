<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

    import { theme } from '$lib/stores';
    import { page } from '$app/stores';

    import '/static/app.css';

    import Header from 'src/lib/components/Header.svelte';


    const THEME = 'theme';
    let cur_theme = null
    let current = null;

    onMount(async () => {
        const last_theme = localStorage.getItem(THEME);
        cur_theme = last_theme
        theme.set(last_theme === null ? 'light' : last_theme);
    });

    $: {
    	let text = $page.url.pathname
      console.log(text);
        switch (text) {
            case '/':
                current = 'home';
                break;
            case '/hobbies':
                current = 'hobbies';
                break;
            case ('/projects' || text.startsWith('/projects/')):
                current = 'projects';
                break;
            case '/etc':
                current = 'etc';
                break;
            default:
                console.log('unknown page', text);
        }
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
    <link rel="stylesheet" href={`static/theme/${$theme}.css`} />
    <title>William George</title>
</svelte:head>

<body>
    <Header {current}/>
    <!-- Page content -->
    <div class="content">
        <slot/>
    </div>
</body>


<style>
    .content {
        position: relative;
        //display: inline-block;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 170px;
        padding-right: 170px;
        z-index: 1;
        color: var(--text-primary);
    }
</style>