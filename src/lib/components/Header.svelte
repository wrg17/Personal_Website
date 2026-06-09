<script lang="ts">
	import { theme } from '$lib/stores';
	import linkedinIcon from '$lib/assets/icons/linkedin.svg';
	import githubIcon from '$lib/assets/icons/github.svg';

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
</script>

<header class="glass" id="header">
	<div class="heading">
		<div class="header_bio">
			<button
				type="button"
				class="user_info"
				aria-label="Toggle color theme"
				aria-pressed={$theme === 'dark'}
				onclick={togglePalette}
			></button>
			<div class="info_tile glass">
				<div class="William_George"><span>William George</span></div>
				<div class="icons">
					<a
						href="https://linkedin.com/in/william-george1"
						aria-label="LinkedIn profile"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img src={linkedinIcon} alt="" width="25" height="25" />
					</a>
					<a
						href="https://github.com/wrg17"
						aria-label="GitHub profile"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img src={githubIcon} alt="" width="25" height="25" />
					</a>
				</div>
			</div>
		</div>
		<nav class="header_links" aria-label="Primary">
			<a id="home" href="/" class:active={current === 'home'} aria-current={current === 'home' ? 'page' : undefined}>Home</a>
			<a id="projects" href="/projects" class:active={current === 'projects'} aria-current={current === 'projects' ? 'page' : undefined}>Projects</a>
			<a id="hobbies" href="/hobbies" class:active={current === 'hobbies'} aria-current={current === 'hobbies' ? 'page' : undefined}>Hobbies</a>
		</nav>
	</div>
</header>

<style>
	.info_tile {
		padding: 0.5rem 1rem;
		border-radius: 10px;
		overflow: hidden;
	}

	header {
		position: sticky;
		top: 0;
		z-index: 101;
		width: 100%;
		color: var(--text-secondary);
		box-sizing: border-box;
	}

	.heading {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 0.5rem 1rem;
		align-items: center;
	}

	.icons {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
	}

	.icons img {
		height: 25px;
		width: 25px;
	}

	.header_bio {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.header_links {
		flex-grow: 1;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 1rem;
		row-gap: 0.5rem;
		justify-content: flex-end;
	}

	.header_links a {
		display: inline-block;
		color: var(--text-primary);
		text-decoration: none;
		padding: 0.25rem 0.5rem;
		transition: color 0.15s ease-in;
	}

	.header_links a.active {
		text-shadow: 0.1em 0 0 black;
		border-bottom: 2px solid var(--color-secondary);
		color: var(--text-secondary);
	}

	.header_links a:hover:not(.active),
	.header_links a:focus-visible:not(.active) {
		color: var(--text-secondary-hover, var(--color-secondary));
	}

	.William_George {
		padding-bottom: 2px;
	}

	.user_info {
		all: unset;
		cursor: pointer;
		display: inline-block;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		background-repeat: no-repeat;
		background-position: 50% 1%;
		background-size: cover;
		background-image: url('/img/Self_Portrait.jpg');
		border: 2px solid var(--color-secondary);
		transition: transform 0.2s ease-in-out;
	}

	.user_info:hover,
	.user_info:focus-visible {
		transform: scale(1.08);
		outline: 2px solid var(--color-secondary);
		outline-offset: 2px;
	}

	@media (max-width: 640px) {
		.heading {
			justify-content: center;
		}
		.header_links {
			justify-content: center;
			width: 100%;
		}
	}
</style>
