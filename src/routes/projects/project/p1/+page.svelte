<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';

	const title = 'Project One';
</script>

<SEO title={title} description="Placeholder project detail page." />

<article>
	<div class="tile glass banner">
		<a href="/projects" aria-label="Back to projects" class="banner-back-link">
			<svg
				class="banner-back"
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
		<h1 class="banner-title">{title}</h1>
	</div>

	<section class="tile glass">
		<h2>Description</h2>
		<p>Placeholder description — replace with the real project write-up.</p>
	</section>

	<section class="tile glass">
		<h2>Graph of Function Relations</h2>
		<img src="/projects/p1/graph_theory.png" alt="Graph of function relations for project one." loading="lazy" />
	</section>

	<section class="tile glass proof-links">
		<h2>Links to Associated Proofs</h2>
		<p>Placeholder — add real reference links here.</p>
	</section>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.tile {
		border-radius: 10px;
		padding: 1.5rem;
	}

	.banner {
		position: sticky;
		top: 0;
		overflow: hidden;
		display: flex;
		align-items: center;
		height: 100px;
		background-color: slateblue;
		padding: 0 1.5rem;
	}

	.banner-back-link {
		display: inline-flex;
		align-items: center;
	}

	.banner-back {
		height: 40px;
		width: 40px;
		fill: white;
	}

	.banner-title {
		padding: 0.5rem 1rem;
		border-radius: 10px;
		background-color: white;
		color: black;
		margin: 0 auto;
		font-size: 1.25rem;
	}

	.proof-links {
		display: flex;
		flex-direction: column;
	}

	img {
		max-width: 100%;
		height: auto;
	}
</style>
