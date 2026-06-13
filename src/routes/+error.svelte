<script lang="ts">
	import { page } from '$app/stores';
	import SEO from '$lib/components/SEO.svelte';

	const status = $derived($page.status);
	const isNotFound = $derived(status === 404);
	const title = $derived(isNotFound ? 'Page not found' : 'Something went wrong');
</script>

<SEO {title} description="The page you were looking for couldn't be found." />

<section class="glass rounded-base p-[clamp(1rem,3vw,3rem)] text-center">
	<p class="text-ink-subtle m-0 text-sm tracking-widest uppercase">Error {status}</p>
	<h1 class="my-4 text-[clamp(1.5rem,4vw,2.5rem)]">{title}</h1>
	<p class="m-0">
		{#if isNotFound}
			There's nothing here. Try heading
			<a href="/" class="underline">home</a>
			instead.
		{:else}
			{$page.error?.message || 'An unexpected error occurred.'} You can head
			<a href="/" class="underline">home</a>
			and try again.
		{/if}
	</p>
</section>
