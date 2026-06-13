<script lang="ts">
	import type { Project } from '$lib/types';

	import InformationWindow from './InformationWindow.svelte';

	interface Props {
		items: Project[];
	}

	let { items }: Props = $props();
</script>

<div
	class="grid auto-rows-[minmax(220px,auto)] grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6"
>
	{#each items as item (item.link + item.title)}
		<InformationWindow {...item} />
	{/each}
</div>
