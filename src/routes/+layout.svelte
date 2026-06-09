<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { theme } from '$lib/stores';
	import type { Theme } from '$lib/stores';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	const THEME_KEY = 'theme';

	let { children } = $props();

	const current = $derived.by(() => {
		const path = $page.url.pathname;
		if (path === '/') return 'home';
		if (path.startsWith('/projects')) return 'projects';
		if (path.startsWith('/hobbies')) return 'hobbies';
		return path.slice(1);
	});

	onMount(() => {
		try {
			const stored = localStorage.getItem(THEME_KEY) as Theme | null;
			theme.set(stored ?? 'light');
		} catch {
			// ignore — storage unavailable
		}
	});
</script>

<svelte:head>
	<link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<Header {current} />

<main class="content">
	{@render children()}
</main>

<Footer />

<style>
	.content {
		position: relative;
		padding: 2rem clamp(1rem, 5vw, 170px);
		z-index: 1;
		color: var(--text-primary);
		min-height: 70vh;
	}
</style>
