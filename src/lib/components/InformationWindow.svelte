<script lang="ts">
	import type { Project } from '$lib/types';

	let { title, image, imageAlt, description, link }: Project = $props();
</script>

<a class="window" href={link}>
	<div class="project-img-style">
		<img src={image} alt={imageAlt} loading="lazy" />
		<h2 class="project-title-style">{title}</h2>
	</div>
	<div class="project-description-style glass">
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
		border-radius: 12px;
		box-sizing: border-box;
		color: inherit;
		text-decoration: none;
		background-color: rgba(0, 0, 0, 0.2);
		transition: transform 0.2s ease-in-out;
	}

	.window:hover,
	.window:focus-visible {
		transform: translateY(-3px);
		outline: 2px solid var(--color-secondary);
		outline-offset: 2px;
	}

	.project-img-style {
		position: relative;
		flex: 1 1 auto;
		min-height: 160px;
		overflow: hidden;
	}

	.project-img-style img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.project-title-style {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
		margin: 0;
		color: white;
		text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
	}

	.project-description-style {
		padding: 0.75rem 1rem;
	}

	.text {
		margin: 0;
		color: white;
		overflow-wrap: break-word;
	}
</style>
