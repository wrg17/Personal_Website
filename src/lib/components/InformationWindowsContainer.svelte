<script lang="ts">
	import InformationWindow from './InformationWindow.svelte';
	import type { Project } from '$lib/types';

	interface Props {
		items: Project[];
	}

	let { items }: Props = $props();
</script>

<div class="grid-container">
	{#each items as item (item.link + item.title)}
		<div class="grid-item">
			<InformationWindow {...item} />
		</div>
	{/each}
</div>

<style>
	.grid-container {
		display: grid;
		gap: 1.5rem;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		grid-auto-rows: minmax(220px, auto);
	}

	.grid-item {
		display: block;
		overflow: hidden;
		border-radius: 12px;
	}
</style>
