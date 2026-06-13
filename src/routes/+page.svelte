<script lang="ts">
	import InformationWindowsContainer from '$lib/components/InformationWindowsContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { featuredProjects } from '$lib/data/projects';
	import { homeCTAs, positioningLine, statusLine } from '$lib/data/profile';
</script>

<SEO title="William George" url="https://williamgeorge.dev/" />

<div class="flex flex-col gap-8">
	<section class="glass rounded-base p-[clamp(1rem,3vw,3rem)]">
		<h1 class="mt-0 mb-4 text-[clamp(1.5rem,3.5vw,2.5rem)]">I'm William George.</h1>
		<p class="text-ink-muted m-0 text-[clamp(1rem,1.5vw,1.25rem)]">{positioningLine}</p>
		{#if statusLine}
			<p
				class="bg-accent-gradient text-ink-on-accent mt-6 mb-0 inline-block rounded-full px-4 py-1.5 text-sm"
			>
				{statusLine}
			</p>
		{/if}
	</section>

	{#if featuredProjects.length > 0}
		<section class="flex flex-col gap-4">
			<div class="flex items-baseline justify-between">
				<h2 class="m-0 text-xl">Featured work</h2>
				<a href="/projects" class="text-sm">All projects →</a>
			</div>
			<InformationWindowsContainer items={featuredProjects} />
		</section>
	{/if}

	{#if homeCTAs.length > 0}
		<nav class="flex flex-wrap justify-center gap-3 pt-2" aria-label="Next steps">
			{#each homeCTAs as cta}
				<a
					href={cta.href}
					class="glass rounded-base hover:text-accent-strong focus-visible:text-accent-strong px-5 py-2 text-sm no-underline"
				>
					{cta.label} →
				</a>
			{/each}
		</nav>
	{/if}
</div>
