<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

{#each data.experiences as experience}
    <div class="slide">
        <div class="slide_info">
            <h3>
                {experience.title} @ {experience.company}
            </h3>
            <h4>{experience.duration}</h4>
            <h6>
                {experience.keywords.join(", ")}
            </h6>
            <p>{@html experience.description}</p>
        </div>
    </div>
{/each}

<style>
    
    h3 {
        font-weight: 700;
        color: #CCCCCC;
        font-size: 2.5em;
    }

    h4 {
        font-weight: 700;
        color: #CCCCCC;
        font-size: 1.5em;
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
</style>