<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO title="Resume" description="William George's resume." />

<section class="glass rounded-base p-[clamp(1rem,3vw,3rem)]">
	<div class="mb-6 flex flex-wrap items-baseline justify-between gap-4">
		<h1 class="m-0 text-[clamp(1.5rem,3.5vw,2.5rem)]">Resume</h1>
		<a
			href="/resume.pdf"
			class="hover:text-accent-strong focus-visible:text-accent-strong text-sm"
			download
		>
			Download PDF →
		</a>
	</div>
	<p class="text-ink-muted m-0">
		Placeholder — drop the resume PDF into <code>static/resume.pdf</code> and replace this section with
		the inline HTML version (or remove if you only want the download).
	</p>
</section>
