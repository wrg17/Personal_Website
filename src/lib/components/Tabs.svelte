<script lang="ts">
	interface Props {
		items: string[];
		activeItem: string;
		onTabChange?: (item: string) => void;
	}

	let { items, activeItem, onTabChange }: Props = $props();
</script>

<div class="tabs">
	<ul>
		{#each items as item}
			<li>
				<button
					type="button"
					class:active={item === activeItem}
					onclick={() => onTabChange?.(item)}
				>
					{item}
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 0.5rem;
	}

	button {
		all: unset;
		cursor: pointer;
		padding: 0.5rem 0.75rem;
		font-size: 1rem;
		color: var(--text-primary);
	}

	button.active {
		color: #ff3e00;
		border-bottom: 2px solid #ff3e00;
	}

	button:focus-visible {
		outline: 2px solid var(--color-secondary);
		outline-offset: 2px;
	}
</style>
