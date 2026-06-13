<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
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

	$effect(() => {
		document.documentElement.classList.toggle('dark', $theme === 'dark');
	});

	afterNavigate(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	});
</script>

<Header {current} />

<main class="relative z-[1] min-h-[70vh] px-[clamp(1rem,5vw,170px)] py-8 text-ink">
	{@render children()}
</main>

<Footer />
