<script lang="ts">
	interface Props {
		title: string;
		description?: string;
		image?: string;
		url?: string;
		type?: 'website' | 'article' | 'profile';
	}

	let {
		title,
		description = 'William George — portfolio, projects, and contact.',
		image = '/img/Self_Portrait-1200.jpg',
		url = '',
		type = 'website'
	}: Props = $props();

	const fullTitle = $derived(title === 'William George' ? title : `${title} — William George`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:image" content={image} />
	{#if url}<meta property="og:url" content={url} />{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
