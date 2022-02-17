<script>
    import { theme } from '$lib/stores';

    export let current;

    const togglePalette = () => {
        const nextTheme = $theme === 'dark' ? 'light' : 'dark';
        theme.set(nextTheme);
        localStorage.setItem('theme', nextTheme);
    }

    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();
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
                    <div class="William George"><span>William George</span></div>
                </div>

                <div class="icons">
                    <a href="https://linkedin.com/in/william-george1">
                        <img src="/static/img/icons/linkedin5.png" alt="linkedin icon">
                    </a>
                    <a href="https://github.com/wrg17">
                        <img src="/static/img/icons/github.png" alt="github icon">
                    </a>
                </div>
            </div>
        </div>
        <div class="header_links_container">
            <div class="header_links">
                <a id="home" href="/" class:active={current === 'home'}>Home</a>
                <a id="projects" href="/projects" class:active={current === 'projects'}>Projects</a>
                <a id="hobbies" href="/hobbies" class:active={current === 'hobbies'}>Hobbies</a>
            </div>
        </div>
    </div>

</header>


<style>
    header {
        z-index: 101;
        width: 100%;
        position: sticky; top: 0;
        box-sizing: border-box; /* add this */
    }

    .heading {
        z-index: inherit;
        position: relative;
        width: auto;
        padding: 2%;
        height: 30px;
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

    .heading > * {
        flex: 0 0 auto;
        height: 100%;
        margin: 0;
    }

    .header_bio {
        flex-grow: 0.25;
    }

    .header_links_container {
        flex-grow: 0.1;
        flex-shrink: 1;
        align-self: center;
    }

    .header_links {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    /* Sidebar links */
    .heading .header_links a {
        text-align: center;
        color: var(--text-primary);
        padding: 2%;
        //padding: 30px;
        text-decoration: none;
        //height: 20px;
        //transition: ease-in 0.15s !important;
    }

    /* Active/current link */
    .heading .header_links a.active {
        //transition: ease-in-out 0.2s;
        //transition: background-color 0.3s;
        background-color: var(--color-secondary);
        color: red; /* var(--text-secondary); */
        outline: none;
    }

    /* Links on mouse-over */
    .heading .header_links a:hover:not(.active) {
        //transition: background-color 0.3s;
        background-color: var(--color-secondary-hover);
    }
    .heading .header_links a:hover {
        //transition: ease-in 0.15s;
        font-size: 110%;
    }

    .user_info_container {
        //width: 170px;
        //height: 170px;
        display: inline-block;
    }

    .user_info {
        //transition: background-color 0.3s;
        display: inline-block;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        align-items: center;

        background-repeat: no-repeat;
        background-position: 50% 1%;
        background-size: cover;
        background-image: url("static/img/Self_Portrait.jpg");
        border: 2px solid var(--color-secondary);
    }


    .user_info:hover {
        cursor: pointer;
        width: 160px;
        height: 160px;
        //transition: .15s ease-in;
    }


</style>