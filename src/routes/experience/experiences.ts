export interface Experience {
    id: number;
    company: string;
    logo?: Image;
    title: string;
    duration: string;
    keywords: Array<string>;
    description: string;
}

export interface Image {
    src: string;
    alt: string;
}

export const experiences: Array<Experience> = [
    {
        id: 0,
        company: "OpenText",
        title: "Software Developer",
        duration: "May 2022 - August 2022",
        keywords: ["Ruby", "Ruby on Rails", "Python", "Flask", "React"],
        description: `
            - Added features to a Flask application and replaced an existing form with a
            React form (new form required new API endpoints and greatly improved UX by reducing
            page redirects per submission by 4x in the worst case).
            <br/><br/>
            - Converted view partials in a Ruby on Rails application to ViewComponents to improve
            page load times.
            <br/><br/>
            - Added React to a Ruby on Rail application using js-bundling and customElements to mount
            React components.
            <br/><br/>
            - Extended a Ruby on Rails model which required new migrations, a new model,
            a new controller for CRUD actions and an updated view. The new view was implemented
            using React components.
        `
    }
]