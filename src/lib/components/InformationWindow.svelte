<script lang="ts">
	import type { Project } from '$lib/types';

	let { title, image, imageAlt, description, link }: Project = $props();
</script>

<a class="window" href={link}>
	<div class="project-img">
		<img src={image} alt={imageAlt} loading="lazy" />
		<h2 class="project-title">{title}</h2>
	</div>
	<div class="project-description">
		<p class="text">{description}</p>
	</div>
</a>

<style>
	.window {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		text-align: center;
		height: 100%;
		width: 100%;
		border-radius: var(--border-radius);
		border: 1px solid var(--surface-border);
		box-sizing: border-box;
		color: var(--text-primary);
		text-decoration: none;
		background-color: var(--surface-strong);
		box-shadow:
			0 0 28px -4px rgba(249, 115, 22, 0.22),
			var(--surface-shadow);
		transition:
			box-shadow 0.25s ease,
			transform 0.25s ease;
	}

	.window:hover,
	.window:focus-visible {
		box-shadow:
			0 0 48px 0 rgba(249, 115, 22, 0.55),
			var(--surface-shadow);
	}

	.project-img {
		position: relative;
		flex: 1 1 auto;
		min-height: 160px;
		overflow: hidden;
	}

	.project-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.project-title {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
		margin: 0;
		color: #ffffff;
		text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
	}

	.project-description {
		padding: 0.75rem 1rem;
		color: var(--text-primary);
		border-top: 1px solid var(--surface-border);
	}

	.text {
		margin: 0;
		overflow-wrap: break-word;
	}
</style>
