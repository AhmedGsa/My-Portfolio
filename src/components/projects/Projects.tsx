import Project from './Project';
import classes from './Projects.module.css';
import data from './data.json';

export default function Projects() {
    return <section id="projects" className={classes.container}>
        <h1>My Projects</h1>
        <p>Here are some of the projects I have worked on.</p>
        
        <div className={classes.projects}>
            {data.map((project) => {
                return <Project key={project.id} href={project.url} image={project.image} title={project.name} description={project.description} />
            })}
        </div>
        
    </section>
}