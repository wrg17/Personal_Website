<script>
    import { theme } from '$lib/stores';
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    export let current;

    const togglePalette = () => {
        const nextTheme = $theme === 'dark' ? 'light' : 'dark';
        theme.set(nextTheme);
        localStorage.setItem('theme', nextTheme);
    }
</script>

<svelte:head>
    <link rel="stylesheet" href={`theme/${$theme}.css`} />
</svelte:head>

<header class="glass" id="header">
    <div class="heading">
        <div>
            <div class="header_bio">
                <div class="user_info_container">
                    <div class="user_info" on:click={togglePalette}></div>
                </div>
                <div class="info_tile glass">
                    <div class="William_George"><span>William George</span></div>
                    <div class="icons">
                        <a href="https://linkedin.com/in/william-george1">
                            <img src="static/img/icons/linkedin5.png" alt="linkedin icon">
                        </a>
                        <a href="https://github.com/wrg17">
                            <img src="static/img/icons/github.png" alt="github icon">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="header_links">
            <a id="home" href="/" class:active={current === 'home'}>Home</a>
            <a id="projects" href="/projects" class:active={current === 'projects'}>Projects</a>
            <a id="hobbies" href="/hobbies" class:active={current === 'hobbies'}>Hobbies</a>
        </div>
    </div>

</header>


<style>
    .info_tile {
        padding: 1%;
        border-radius: 10px;
        overflow: hidden;
    }

    header {
        position: sticky;
        top: 0;
        z-index: 101;
        width: 100%;
        color: var(--text-secondary);
        box-sizing: border-box; /* add this */
    }

    .heading {
        z-index: inherit;
        position: relative;
        width: auto;
        padding-left: 2%;
        height: 50px;
        horiz-align: center;
        text-align: center;
        display: flex;
    }

    .icons {
        display: flex;
        justify-content: center;
    }

    .icons * {
        padding: 0 1%;
    }

    .icons img {
        cursor: pointer;
        height: 25px;
    }

    .header_bio {
        flex-grow: 0.25;
    }

    .header_links {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        column-gap: 10px;
    }

    /* Sidebar links */
    .heading .header_links a {
        display: block;
        align-self: center;
        color: var(--text-primary);
        text-decoration: none;
        transition: ease-in .15s!important;
    }

    /* Active/current link */
    .heading .header_links a.active {
        transition: ease-in-out 0.2s;
        text-shadow: 0.1em 0 0 black;
        padding-bottom: 4px;
        border-bottom: 2px solid var(--color-secondary);
        color: var(--text-secondary);
    }

    /* Links on mouse-over */
    .heading .header_links a:hover:not(.active) {
        transition: background-color 0.3s;
        color: var(--text-secondary-hover);
    }

    .William_George {
        padding-bottom: 2px;
    }

    .user_info_container {
        padding-top: 10px;
        display: inline-block;
    }

    .user_info {
        transition: ease-in-out 0.3s;
        display: inline-block;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        align-items: center;

        background-repeat: no-repeat;
        background-position: 50% 1%;
        background-size: cover;
        background-image: url("static/img/Self_Portrait.jpg");
        border: 2px solid var(--color-secondary)
    }


    .user_info:hover {
        cursor: pointer;
        width: 100px;
        height: 100px;
        transition: ease-in-out .2s;
    }


</style>