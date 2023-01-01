<script lang="ts">
    import type { PageData } from "./$types";
    import { base } from "$app/paths";

    export let data: PageData;
</script>

{#each data.projects as project}
    <div class="slide">
        <div class="slide_info">
            <h3>
                {project.title}
                    
                {#each project.links as link}
                    <a href={link.link} target="_blank" rel="noreferrer"><i class={link.icon}></i></a>
                {/each}
            </h3>
            <h6>
                {project.keywords.join(", ")}
            </h6>
            <p>{@html project.description}</p>
        </div>
        {#if project.image }
            <img src={base + "/" + project.image.src} alt={project.image.alt} class="project_image">
        {/if}
    </div>
{/each}
<div class="slide last_slide">
    <div class="slide_info">
        <h3>
            See More
            <a href="https://vincenzoy.github.io/front_end_portfolio" target="_blank" rel="noreferrer">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </h3>
    </div>
</div>

<style>
    h3 {
        font-weight: 700;
        color: #CCCCCC;
        font-size: 2.5em;
    }

    h3 a {
        margin: 0 0.25em;
    }

    h6 {
        font-size: 1em;
        color: #57A64A;
        line-height: 1.2em;
    }

    p {
        margin-top: 1em;
        color: #CCCCCC;
        font-size: 1.2em;
        line-height: 1.1em;
    }

    a:link {
        text-decoration: inherit;
        color: inherit;
    }

    a:visited {
        text-decoration: inherit;
        color: inherit;
    }

    .slide {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 4em 4em;
    }

    .slide_info {
        display: flex;
        flex-direction: column;
        row-gap: 0.75em;
        padding: 1em 4em 1em;
        border-left: solid #CC3E44 3px;
    }

    @media (max-width: 1700px) {
        .slide {
            flex-direction: column;
            row-gap: 3em;
        }
    }

    @media (max-width: 600px) {
        .slide_info {
            border: none;
            padding: 0;
        }
    }

    .project_image {
        width: 100%
    }
</style>