<script lang="ts">
	import { slide } from "svelte/transition";
	import { onMount } from "svelte";

    export let line_length: number = 30;
    export let line_height: number = 1;
    export let indent: number = 0;
    export let min_word_size: number = 3;
    export let max_word_size: number = 12;

    const colours: Array<Array<string>> = [
        ["#3C3C3C", "#3C3C3C"],
        ["#45769E", "#9CDCFE"],
        ["#C678DD", "#E06C75"],
        ["#FFD77A", "#FF6C6A"]
    ];

    let blocks: Array<number> = [5, 15, 10];

    // needed for animation on page load
    let ready = false;
    onMount(() => {
        ready = true;
        blocks = generateBlocks();
    })

    function generateBlocks(): Array<number> {
        let _blocks: Array<number> = [];

        let characters_left = line_length - indent;

        while(characters_left > max_word_size) {
            const _block = getIntegerBetween(min_word_size, max_word_size);
            characters_left -= _block;
            _blocks.push(_block);
        }

        _blocks.push(characters_left);

        return _blocks;
    }

    function getIntegerBetween(min:number, max:number): number {
        return Math.floor(Math.random() * (max-min)) + min;
    }

    function generateStyle(width:number, height:number, gradient_colours: Array<string>): string {
        return `
            width: ${width}em;
            height: ${height}em;
            background: ${gradient_colours[0]};
            background: linear-gradient(90deg, ${gradient_colours[0]} 0%, ${gradient_colours[1]} 100%);
        `;
    }
</script>

{#if ready}
    <div class="line">
        {#if indent > 0}
            <div style="
                width: {indent}em;
                height: {line_height}em;
            "></div>
        {/if}
        {#each blocks as block, index}
            <div style={generateStyle(block, line_height, colours[getIntegerBetween(0, colours.length)])}
                in:slide="{{delay: index*150, duration: 1000}}"></div>
        {/each}
    </div>
{/if}

<style>
    .line {
        display: flex;
        flex-direction: row;
        column-gap: 1em;
        flex-wrap: wrap;
        row-gap: 1em;
    }
</style>