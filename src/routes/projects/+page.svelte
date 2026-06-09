<script lang="ts">
	import { projects } from '$lib/data/projects';
	import InformationWindowsContainer from '$lib/components/InformationWindowsContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO title="Projects" description="Projects by William George." />

<section>
	<h1 class="sr-only">Projects</h1>
	<InformationWindowsContainer items={projects} />
</section>
