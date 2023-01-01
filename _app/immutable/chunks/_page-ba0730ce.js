const e=[{id:0,title:"ASCII Game Engine",keywords:["C++","Ncurses","Entity Component System","MVC"],links:[{icon:"fa-brands fa-github",link:"https://github.com/VincenzoY/age"}],description:`
            A terminal ASCII game engine and two accompanying games created with C++.
            The game engine provides to the client the necessary tools with which that can
            extend with their own game logic to create games.
            <br /><br />
            My game engine follows the Entity Component System. It provides abstract Entities which
            are holders of abstract Components which are raw data 
            (such as position, velocity, health, etc...).
            It also provides abstract Systems which act on Entities with certain Components (for example,
            a movement system would act on entities with position and velocity and move the entity).
            <br /><br />
            The client game programmer can then extend the engine with new Components or Systems to
            create different games. I created two games in the engine which can be seen in the accompanying images.
            <br /><br />
            Manipulation of the terminal uses the NCurses library and the Model View Controller Framework to 
            accept user input, calculate the next game state and display the state to the screen.
            <br /><br />
            I used a UML diagram to help plan out and implement this project.
            <br /><br />
            This code is private. Available upon request.
        `,image:{src:"project_sources/AGE/age.gif",alt:"GIF displaying two games made using the game engine."}},{id:1,title:"Personal Website",keywords:["Svelte","SvelteKit","TypeScript","JavaScript"],links:[{icon:"fa-brands fa-github",link:"https://github.com/VincenzoY/sveltekit_personal_site"}],description:`
            My personal website (this site) made with primarily Svelte and SvelteKit. 
            <br/><br/>
            I was watching a Fireship video about Svelte and SveltKit and thought it was an
            interesting framework. I had been planning on updating my old Ruby/Ruby on Rails
            website to a JS framework so I decided to use Svelte.
            <br/><br/>
            Svelte and SvelteKit has been a pretty fun experience so far!
        `},{id:2,title:"Etch-A-Sketch",keywords:["HTML","CSS","JavaScript"],links:[{icon:"fa-brands fa-github",link:"https://github.com/VincenzoY/front_end_portfolio/tree/master/lib/sketchboard"},{icon:"fa-solid fa-arrow-up-right-from-square",link:"https://vincenzoy.github.io/front_end_portfolio/lib/sketchboard/sketchboard.html"}],description:`
            This is among the first projects I made that I felt were "polished." Thus it holds a special
            place in my heart. The last commit for this was March 24, 2020.
            <br/><br/>
            This is a browser version of an Etch-A-Sketch board or a sketchboard. There is a canvas made
            up of pixels with which the user can draw by hovering over a pixel. The board can be cleared
            and resized as desired.
            <br/><br/>
            The functionality was all acheived using vanilla JS and the document Web API.
        `},{id:3,title:"Old Personal Site",keywords:["Ruby on Rails","PostgreSQL","JavaScript","HTML/CSS/SASS","DigitalOcean"],links:[{icon:"fa-brands fa-github",link:"https://github.com/VincenzoY/personal-site"}],description:`
            My old personal site using Ruby on Rails.
            <br/><br/>
            Other than the information viewable from my current site, 
            this was a dynamic site where users could create accounts to comment on my blog posts.
            User authentication used the Devise gem. Blog posts and comments were handled with their own
            Models, Views and Controllers to allow for CRUD actions. Also used partials to adhere to DRY principles.
        `},{id:4,title:"Discord Timer Bot",keywords:["Ruby","SQLite3","Google Cloud Platform"],links:[{icon:"fa-brands fa-github",link:"https://github.com/VincenzoY/timer_bot"}],description:`
            A Discord bot coded in Ruby and utilizing the discordrb API library to 
            create server timers
            <br/><br/>
            Users could create timers in their servers which would be saved to an SQLite3 database. 
            These timers would display as locked voice channels and update periodically. 
            I hosted this bot through a Google Cloud Platform's VM instance.
        `}],t=({params:i})=>({projects:e}),a=Object.freeze(Object.defineProperty({__proto__:null,load:t},Symbol.toStringTag,{value:"Module"}));export{a as _,t as l};
