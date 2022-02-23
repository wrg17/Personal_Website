<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { theme } from '$lib/stores';
	import { page } from '$app/stores';

	import '/static/app.css';

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
    const title = "HOWDY";
</script>

<svelte:head>
    <link rel="stylesheet" href={`static/theme/${$theme}.css`} />
    <title>William George</title>
</svelte:head>

<body>
    <!-- Page content -->

    <div class="tile glass banner">
        <a href="/projects">
            <svg class="banner-back" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 108.06"><title>back-arrow</title><path d="M63.94,24.28a14.28,14.28,0,0,0-20.36-20L4.1,44.42a14.27,14.27,0,0,0,0,20l38.69,39.35a14.27,14.27,0,0,0,20.35-20L48.06,68.41l60.66-.29a14.27,14.27,0,1,0-.23-28.54l-59.85.28,15.3-15.58Z"/></svg>
        </a>
        <div class="banner-title">
            {title}
        </div>
    </div>

    <div class="tile glass">
        <h1>Description:</h1>
        <span>This is a description</span>
    </div>

    <div class="tile glass">
        <h1>Graph of Function Relations:</h1>
        <img src="static/projects/p1/graph_theory.png">
    </div>

    <div class="tile glass proof-links">
        <h1>Links to Associated Proofs:</h1>
        <a href="https://google.com">
            I am a link to google
        </a>
        <a href="https://yahoo.com">
            I am a link to yahoo
        </a>
    </div>
</body>


<style>

    body {
        display: flex;
        flex-direction: column;
    }

    .tile {
        border-radius: 10px;
        margin: 30px;
        width: auto;
    }

    .banner {
        position: sticky;
        top: 0;
        overflow: hidden;
        display: flex;
        height: 100px;
        background-size: cover;
        padding-left: 30px;
        padding-right: 30px;
        background-color: slateblue;
    }

    .banner > * {
    }

    .banner-back {
        position: absolute;
        content: "";
        height: 50px;
        width: 50px;
        top: 25%;
    }

    .banner-title {
        padding: 10px;
        border-radius: 10px;
        background-color: white;
        margin: auto;
        justify-content: center;
    }

    .proof-links {
        display: flex;
        flex-direction: column;
    }
</style>