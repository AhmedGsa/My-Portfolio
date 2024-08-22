import Project from './Project';
import classes from './Projects.module.css';

export default function Projects() {
    return <section id="projects" className={classes.container}>
        <h1>My Projects</h1>
        <p>Here are some of the projects I have worked on.</p>
        
        <div className={classes.projects}>
            <Project href='https://www.khedamni.com' title='Khedamni' description='description' image='/images/khedamni1.jpeg' />
            <Project href='https://www.khedamni.com' title='Khedamni' description='description' image='/images/khedamni.jpeg' />
            <Project href='https://www.khedamni.com' title='Darckoum' description='description' image='/images/darckoum.jpeg' />
        </div>
        
    </section>
}