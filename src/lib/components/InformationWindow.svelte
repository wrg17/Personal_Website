<script>
    export let proj_title
    export let proj_img
    export let proj_img_des
    export let proj_des
    export let proj_link
</script>


<div class="window">
    <a href={proj_link}>
        <div class="project-img-style">
            <h1 class="project-title-style">{proj_title}</h1>
        </div>
        <div class="project-description-style glass">
            <div class="text"> {proj_des} </div>
        </div>
    </a>
</div>


<style>
    .window {
        overflow: hidden;
        flex-direction: column;

        cursor: pointer;
        text-align: center;

        height: 100%;
        width: 100%;

        padding: 0;

        border-radius: 10%;
        //border: 2px solid white;
        box-sizing: border-box;

        margin: 0;
    }

    .project-img-style {
        position: relative;

        height: 70%;
        width: 100%;

        background-image: url("static/img/ocean.jpeg");
        opacity: 90%;
        background-size: cover;
    }

    .project-title-style {
        position: absolute;
        margin: auto;

        top: 40%;

        opacity: 100%;
        color: black;
    }

    .project-description-style {
        height: 30%;
        width: 100%;
        overflow: hidden;
    }

    h1 {
        height: 100%;
        width: 100%;
        margin: 0;
        text-align: center;
        position: absolute;
        color: white;
    }

    .text {
        position: relative;
        height: auto;
        width: auto;
        margin-top: 1%;
        margin-bottom: 5%;
        margin-left: 5%;
        margin-right: 5%;
        display: block;

        overflow: hidden;
        text-overflow: ellipsis;
        color: white;
        overflow-wrap: break-word;
    }
</style>