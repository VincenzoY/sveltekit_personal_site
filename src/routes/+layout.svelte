<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

    <style>
		/* http://meyerweb.com/eric/tools/css/reset/ 
		v2.0 | 20110126
		License: none (public domain)
		*/

		html, body, div, span, applet, object, iframe,
		h1, h2, h3, h4, h5, h6, p, blockquote, pre,
		a, abbr, acronym, address, big, cite, code,
		del, dfn, em, img, ins, kbd, q, s, samp,
		small, strike, strong, sub, sup, tt, var,
		b, u, i, center,
		dl, dt, dd, ol, ul, li,
		fieldset, form, label, legend,
		table, caption, tbody, tfoot, thead, tr, th, td,
		article, aside, canvas, details, embed, 
		figure, figcaption, footer, header, hgroup, 
		menu, nav, output, ruby, section, summary,
		time, mark, audio, video {
			margin: 0;
			padding: 0;
			border: 0;
			font-size: 100%;
			font: inherit;
			vertical-align: baseline;
		}
		/* HTML5 display-role reset for older browsers */
		article, aside, details, figcaption, figure, 
		footer, header, hgroup, menu, nav, section {
			display: block;
		}
		body {
			line-height: 1;
		}
		ol, ul {
			list-style: none;
		}
		blockquote, q {
			quotes: none;
		}
		blockquote:before, blockquote:after,
		q:before, q:after {
			content: '';
			content: none;
		}
		table {
			border-collapse: collapse;
			border-spacing: 0;
		}

		body {
        	background-color: #1E1E1E;
    	}

        h1, h2, h3, h4, h5, h6, p, li {
            color: #CCCCCC;
            font-family: 'Open Sans', sans-serif;
        }
	</style>
</svelte:head>

<nav>
    <a href="/" id="logo"><div id="home" class="circle"></div></a>

    <a href="/projects"><h3>Projects</h3></a>
    <a href="/experience"><h3>Experience</h3></a>
    <!--<a href="/resume"><h3>Resume</h3></a>-->
    <!--<h3>Blog</h3>-->
</nav>
<slot></slot>
<footer>
    <a href="mailto:vincenzoyee@gmail.com"><i class="fa-solid fa-envelope"></i></a>
    <a href="https://github.com/VincenzoY" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
    <a href="https://www.linkedin.com/in/vincentwy/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
</footer>

<style>
    nav {
        box-sizing: border-box;
        flex-wrap: wrap;
        row-gap: 0.75em;
        padding: 1.5em 3em;
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 2em;
        background-color: #1E1E1E;
        width: 100%;
    }

    nav h3 {
        font-size: 2em;
    }

    .circle {
        border-radius: 50%;
    }

    #home {
        background-color: #CC3E44;
        height: 2em;
        width: 2em;
    }

    h1, h2, h3, h4, h5, h6, p {
        color: #CCCCCC;
        font-family: 'Open Sans', sans-serif;
    }

    footer {
        position: fixed;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        row-gap: 2em;
        color: #CC3E44;
        width: 3em;
        margin: 2em 2em;
        align-items: center;
    }

    a:link {
        text-decoration: inherit;
        color: inherit;
    }

    a:visited {
        text-decoration: inherit;
        color: inherit;
    }

    nav a#logo:hover {
        border-bottom: none;
    }

    nav a:hover{
        border-bottom: 1px #CCCCCC solid;
    }

    footer a i {
        display: inline-block;
        font-size: 3em;
    }
</style>