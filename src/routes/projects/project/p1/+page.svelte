<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';

	const title = 'Project One';
</script>

<SEO {title} description="Placeholder project detail page." />

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
		<h1 class="mx-auto my-0 text-2xl text-ink-on-accent">{title}</h1>
	</div>

	<section class="glass rounded-base p-6">
		<h2>Description</h2>
		<p>Placeholder description — replace with the real project write-up.</p>
	</section>

	<section class="glass rounded-base p-6">
		<h2>Graph of Function Relations</h2>
		<img
			class="h-auto max-w-full"
			src="/projects/p1/graph_theory.png"
			alt="Graph of function relations for project one."
			loading="lazy"
		/>
	</section>

	<section class="glass flex flex-col rounded-[10px] p-6">
		<h2>Links to Associated Proofs</h2>
		<p>Placeholder — add real reference links here.</p>
	</section>
</article>
