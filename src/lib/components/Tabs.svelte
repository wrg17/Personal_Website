<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    export let items;
    export let activeItem;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={() => dispatch('tabChange', item)}>
                <div class="both {item === activeItem ? 'active' : 'inactive'}">{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {

    }

    ul {
        padding: 0;
        list-style-type: none;
    }

    li {
        font-size: 18px;
        color: white;
        cursor: pointer;
    }

    .both {
        padding: 8px;
    }

    .active {
        color: #ff3e00;
        border-bottom: 2px solid #ff3e00;

    }

    .inactive {

    }
</style>