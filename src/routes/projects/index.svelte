<script>
    import InformationWindowsContainer from "/src/lib/components/InformationWindowsContainer.svelte";
</script>

<section>
    <InformationWindowsContainer class="windows"/>
</section>

<style>
    body {
        horiz-align: center;
        margin: 0;
        padding: 0;
    }

    Header {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .windows {
        width: 100%;
    }

    .apples {
        height: 100%;
        width: 100%;
        text-align: center;
        position: fixed;
        display: flex;
        flex-direction: column;
    }

    p {
        color: white;
    }

    main {
        horiz-align: center;
        padding: 1em;
        max-width: 960px;
        width: 90%;
        margin: auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>