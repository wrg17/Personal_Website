<script>
	import Header from "./components/Header.svelte";
	import router from "page"
	import Tabs from "./shared/Tabs.svelte";

	import Footer from "./components/Footer.svelte";
	import InformationWindowsContainer from "./shared/InformationWindowsContainer.svelte";

	// Routes
	import Home from "./routes/index.svelte"
	import Projects from "./routes/Projects/index.svelte"
	import Hobbies from "./routes/Hobbies/index.svelte"

	// Variables
	let page
	let params
	let activeItem = "Home"

	// Set up the pages to watch for
	router('/', () => (page = Home))
	router('/projects', () => (page = Projects))
	router('/hobbies', () => (page = Hobbies))

	// Set up the router to start and actively watch for changes
	router.start()

	const contentChange = (e) => {
		activeItem = e.detail;
	}

	import {fade, scale, slide} from 'svelte/transition';
	import {flip} from 'svelte/animate'

	const fadeTime = 250;
</script>

<Header {activeItem} on:contentChange={contentChange}/>
<main>
	<p>
		{#if "Home" === activeItem}
			<div in:fade="{{ delay: fadeTime, duration: fadeTime }}" out:fade="{{ delay: 0, duration: fadeTime }}">
				<Home/>
			</div>
		{:else if "Projects" === activeItem}
			<div in:fade="{{ delay: fadeTime, duration: fadeTime }}" out:fade="{{ delay: 0, duration: fadeTime }}">
				<Projects/>
			</div>
		{:else if "Hobbies" === activeItem}
			<div in:fade="{{ delay: fadeTime, duration: fadeTime }}" out:fade="{{ delay: 0, duration: fadeTime }}">
				<Hobbies/>
			</div>
		{:else if "FAQ" === activeItem}
			FAQ
		{/if}
	</p>
	<!--<svelte:component this="{page}" params="{params}" />-->
</main>
<!--
<body> class="apples"
	<Header/>
	<main>
		<InformationWindowsContainer class="windows"/>
	</main>
	<Footer/>
</body>
-->
<style>
	body {
		horiz-align: center;
		margin: 0;
		padding: 0;
	}

	Header {
		width: 100%;
		margin: 0;
		padding: 0;
	}

	.windows {
		width: 100%;
	}

	.apples {
		height: 100%;
		width: 100%;
		text-align: center;
		position: fixed;
		display: flex;
		flex-direction: column;
	}

	p {
		color: white;
	}

	main {
		horiz-align: center;
		padding: 1em;
		max-width: 960px;
		width: 90%;
		margin: auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>