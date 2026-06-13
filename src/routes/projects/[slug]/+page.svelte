<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const project = $derived(data.project);
	const dateRange = $derived.by(() => {
		if (!project.dates) return null;
		return `${project.dates.start} – ${project.dates.end ?? 'Present'}`;
	});
</script>

<SEO
	title={project.title}
	description={project.description}
	image={project.imageOg}
	type="article"
/>

<article class="flex flex-col gap-6">
	<div
		class="glass bg-accent-gradient rounded-base sticky top-0 flex h-[100px] items-center overflow-hidden px-6 text-ink-on-accent"
	>
		<a
			href="/projects"
			aria-label="Back to projects"
			class="inline-flex items-center text-ink-on-accent"
		>
			<svg
				class="h-8 w-8 fill-current"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 122.88 108.06"
				aria-hidden="true"
				focusable="false"
			>
				<path
					d="M63.94,24.28a14.28,14.28,0,0,0-20.36-20L4.1,44.42a14.27,14.27,0,0,0,0,20l38.69,39.35a14.27,14.27,0,0,0,20.35-20L48.06,68.41l60.66-.29a14.27,14.27,0,1,0-.23-28.54l-59.85.28,15.3-15.58Z"
				/>
			</svg>
		</a>
		<h1 class="mx-auto my-0 text-2xl text-ink-on-accent">{project.title}</h1>
	</div>

	{#if dateRange || project.repoUrl || project.liveUrl}
		<section
			class="glass rounded-base flex flex-wrap items-center gap-x-6 gap-y-2 px-6 py-3 text-sm"
		>
			{#if dateRange}
				<span class="text-ink-muted">{dateRange}</span>
			{/if}
			{#if project.repoUrl}
				<a href={project.repoUrl} rel="noopener noreferrer" target="_blank">Repo →</a>
			{/if}
			{#if project.liveUrl}
				<a href={project.liveUrl} rel="noopener noreferrer" target="_blank">Live →</a>
			{/if}
		</section>
	{/if}

	<section class="glass rounded-base p-6">
		<h2>Description</h2>
		<p>{project.description}</p>
	</section>

	{#if project.body && project.body.length > 0}
		<section class="glass rounded-base flex flex-col gap-3 p-6">
			<h2>Details</h2>
			{#each project.body as paragraph}
				<p class="m-0">{paragraph}</p>
			{/each}
		</section>
	{/if}

	{#if project.techStack && project.techStack.length > 0}
		<section class="glass rounded-base p-6">
			<h2>Tech</h2>
			<ul class="m-0 flex flex-wrap gap-2 p-0">
				{#each project.techStack as tech}
					<li
						class="border-surface-edge text-ink-muted list-none rounded-full border px-3 py-1 text-sm"
					>
						{tech}
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</article>
