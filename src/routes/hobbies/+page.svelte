<script lang="ts">
	import { hobbies } from '$lib/data/projects';
	import InformationWindowsContainer from '$lib/components/InformationWindowsContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO title="Hobbies" description="Hobbies and side interests of William George." />

<section>
	<h1 class="sr-only">Hobbies</h1>
	<InformationWindowsContainer items={hobbies} />
</section>
