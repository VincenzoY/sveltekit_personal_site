<script>
    import FauxCode from './faux_code.svelte';
    import {slide} from 'svelte/transition'
</script>

<div id="intro" class="slide">
    <div class="slide_info" transition:slide>
        <FauxCode line_length={18}/>
        <FauxCode line_length={30} />
        <FauxCode line_length={0} />
        <FauxCode line_length={40}/>
        <h1>Vincent Yee</h1>
        <h4>Computer Science Student @ UWaterloo</h4>
        <FauxCode line_length={36}/>
        <FauxCode indent={4} line_length={32}/>
        <FauxCode indent={4} line_length={24}/>
        <FauxCode line_length={28}/>
    </div>
</div>
<div class="slide">
    <div class="slide_info">
        <h3>Hey there! I'm Vincent.</h3>
        <FauxCode line_length={10} min_word_size={1} max_word_size={8}/>
        <FauxCode line_length={18}/>
        <p>
            I'm a CS Co-op student at the University of Waterloo from Alberta<br />
            I enjoy creating things. I like to use code to solve problems and 
            create satisfying solutions.<br />
            My main experience is in full stack software development but I have 
            been interested in experiencing different development fields.<br />
            Some technologies I've worked with:
        </p>
        <ul>
            <li>JavaScript/TypeScript</li>
            <li>C/C++</li>
            <li>Python</li>
            <li>Ruby/Ruby on Rails</li>
            <li>React</li>
            <li>Svelte/Sveltekit (used for this site)</li>
            <li>HTML/CSS/SASS</li>
            <li>Git</li>
            <li>SQL/PostgreSQL</li>
        </ul>
        <FauxCode line_length={20}/>
        <FauxCode line_length={14}/>
    </div>
</div>


<style>
    h1 {
        font-weight: 700;
        color: #CCCCCC;
        font-size: 5em;
    }

    h2 {
        font-weight: 700;
        color: #CCCCCC;
        font-size: 3.5em;
    }

    h3 {
        font-weight: 700;
        color: #CCCCCC;
        font-size: 3em;
        margin-bottom: 0.5em;
    }

    h4 {
        color: #CCCCCC;
        font-size: 2em;
        margin-bottom: 0.25em;
    }

    p {
        margin-top: 1em;
        color: #CCCCCC;
        font-size: 1.5em;
        line-height: 1.3em;
    }

    ul {
        margin: 0 0 1em 3em;
        list-style-type: circle;
    }

    li {
        font-size: 1.5em;
        color: #57A64A;
        line-height: 1.2em;
    }

    .slide {
        height: 100vh;
        display: flex;
        align-items: center;
    }

    .slide_info {
        display: flex;
        flex-direction: column;
        row-gap: 0.75em;
        margin-left: 4em;
        border-left: solid #CC3E44 2px;
        padding: 0.5em 0 0.5em 3em;
    }
</style>