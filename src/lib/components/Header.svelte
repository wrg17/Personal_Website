<script lang="ts">
	import githubIcon from '$lib/assets/icons/github.svg';
	import linkedinIcon from '$lib/assets/icons/linkedin.svg';
	import { theme } from '$lib/stores';

	interface Props {
		current: string | null;
	}

	let { current }: Props = $props();

	function togglePalette() {
		const nextTheme = $theme === 'dark' ? 'light' : 'dark';
		theme.set(nextTheme);
		try {
			localStorage.setItem('theme', nextTheme);
		} catch {
			// ignore — private browsing or storage disabled
		}
	}

	const navItems = [
		{ id: 'home', href: '/', label: 'Home', key: 'home' },
		{ id: 'projects', href: '/projects', label: 'Projects', key: 'projects' },
		{ id: 'hobbies', href: '/hobbies', label: 'Hobbies', key: 'hobbies' }
	] as const;
</script>

<header id="header" class="glass sticky top-0 z-[101] box-border w-full text-ink-muted">
	<div class="relative flex flex-wrap items-center gap-4 px-4 py-2 max-sm:justify-center">
		<div class="flex items-center gap-3">
			<button
				type="button"
				class="inline-block size-[70px] cursor-pointer appearance-none rounded-full border-0 bg-[url('/img/Self_Portrait.jpg')] bg-cover bg-[position:50%_1%] bg-no-repeat shadow-[0_0_0_2px_var(--color-canvas),0_0_0_4px_var(--color-accent)] transition-transform duration-200 ease-in-out hover:scale-[1.08] hover:shadow-[0_0_0_2px_var(--color-canvas),0_0_0_4px_var(--color-accent-soft)] focus-visible:scale-[1.08] focus-visible:shadow-[0_0_0_2px_var(--color-canvas),0_0_0_4px_var(--color-accent-soft)]"
				aria-label="Toggle color theme"
				aria-pressed={$theme === 'dark'}
				onclick={togglePalette}
			></button>
			<div class="glass overflow-hidden rounded-[10px] px-4 py-2">
				<div class="pb-0.5"><span>William George</span></div>
				<div class="flex justify-center gap-2">
					<a
						href="https://linkedin.com/in/william-george1"
						aria-label="LinkedIn profile"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img class="size-[25px] dark:invert" src={linkedinIcon} alt="" width="25" height="25" />
					</a>
					<a
						href="https://github.com/wrg17"
						aria-label="GitHub profile"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img class="size-[25px] dark:invert" src={githubIcon} alt="" width="25" height="25" />
					</a>
				</div>
			</div>
		</div>
		<nav
			class="flex flex-grow flex-row flex-wrap justify-end gap-x-4 gap-y-2 max-sm:w-full max-sm:justify-center"
			aria-label="Primary"
		>
			{#each navItems as item}
				{@const isActive = current === item.key}
				<a
					id={item.id}
					href={item.href}
					aria-current={isActive ? 'page' : undefined}
					class={[
						'inline-block px-2 py-1 text-ink no-underline transition-colors duration-150 ease-in',
						isActive
							? 'bg-accent-gradient bg-no-repeat pb-1 [background-position:0_100%] [background-size:100%_3px]'
							: 'hover:text-accent-strong focus-visible:text-accent-strong dark:hover:text-accent dark:focus-visible:text-accent'
					]}>{item.label}</a
				>
			{/each}
		</nav>
	</div>
</header>
