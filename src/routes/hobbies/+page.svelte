<script lang="ts">
	import InformationWindowsContainer from '$lib/components/InformationWindowsContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { hobbies } from '$lib/data/projects';
</script>

<SEO title="Hobbies" description="Hobbies and side interests of William George." />

<section>
	<h1 class="visually-hidden">Hobbies</h1>
	<InformationWindowsContainer items={hobbies} />
</section>

<style>
	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
