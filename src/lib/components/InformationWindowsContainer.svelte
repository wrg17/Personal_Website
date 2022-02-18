<script>
    import InformationWindow from "./InformationWindow.svelte";

    let content_array = [
        ["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS", "https://google.com"],
        ["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS", "https://google.com"],
        ["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS", "https://google.com"],
        ["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS", "https://google.com"],
        ["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS", "https://google.com"],
        ["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS", "https://google.com"],
        ["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS", "https://google.com"],
			["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS", "https://google.com"],
        ["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS", "https://google.com"],
        ["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS"],
        ["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS"],
        ["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS"],
        ["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS"],
        ["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS"],
        ["TITLE", "static/img/ocean.jpeg", "dino", "eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS"]
    ];
</script>

<div class="this">
    <div class="grid-container">
        {#each content_array as content}
            <div class="grid-item">
                <InformationWindow proj_title={content[0]} proj_img={content[1]} proj_img_des={content[2]} proj_des={content[3]} proj_link={content[4]} />
                <!-- <InformationWindow img_project={content[0]} img_description={content[1]} proj_description={content[2]} /> -->
            </div>
        {/each}
    </div>
</div>

<style>
    .this {
        width: 100%;
    }
    .grid-container {
        display: grid;
        gap: 5% 2.5%;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(200px, auto);
    }

    .grid-item:nth-child(7n -6)  {
        grid-column: span 2;
        border-radius: 50%;
    }

    .grid-item:nth-child(11n + 7)  {
        grid-column: span 2;
        border-radius: 50%;
    }

    .grid-item {
        display: block;
        overflow: hidden;
    }
</style>