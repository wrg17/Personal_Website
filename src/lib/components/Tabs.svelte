<script lang="ts">
	interface Props {
		items: string[];
		activeItem: string;
		onTabChange?: (item: string) => void;
	}

	let { items, activeItem, onTabChange }: Props = $props();
</script>

<div>
	<ul class="m-0 flex list-none gap-2 p-0">
		{#each items as item}
			<li>
				<button
					type="button"
					class="cursor-pointer appearance-none border-0 bg-transparent px-3 py-2 text-base text-ink"
					class:tab-active={item === activeItem}
					onclick={() => onTabChange?.(item)}
				>
					{item}
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
	.tab-active {
		color: #ff3e00;
		border-bottom: 2px solid #ff3e00;
	}
</style>
