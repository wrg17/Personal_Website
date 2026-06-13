<script lang="ts">
	import type { Project } from '$lib/types';

	let { title, image, imageSrcset, imageAlt, description, link }: Project = $props();
</script>

<a
	class="flex h-full w-full flex-col overflow-hidden rounded-base border border-surface-edge bg-surface-elevated text-center text-ink no-underline shadow-[var(--shadow-glow),var(--shadow-surface)] transition duration-250 ease-out hover:shadow-[var(--shadow-glow-strong),var(--shadow-surface)] focus-visible:shadow-[var(--shadow-glow-strong),var(--shadow-surface)]"
	href={link}
>
	<div class="relative min-h-40 flex-auto overflow-hidden">
		<img
			class="block h-full w-full object-cover"
			src={image}
			srcset={imageSrcset}
			sizes={imageSrcset ? '(min-width: 1200px) 380px, (min-width: 640px) 45vw, 90vw' : undefined}
			alt={imageAlt}
			width="800"
			height="523"
			loading="lazy"
			decoding="async"
		/>
		<h2
			class="absolute inset-0 m-0 grid place-items-center text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]"
		>
			{title}
		</h2>
	</div>
	<div class="border-t border-surface-edge px-4 py-3 text-ink">
		<p class="m-0 break-words">{description}</p>
	</div>
</a>
