import classes from './Experience.module.css';
import Job from './Job';

export default function Experience() {
    return <section id="experience" className={classes.container}>
        <h1>My Experience</h1>
        <p>I have a range of experience in the tech industry.</p>
        
        <div className={classes.jobs}>
            <Job title="Web Developer" company="Fiverr" date="Juin 2022 - Present" image='/images/fiverr.png' />
            <hr />
            <Job title="Backend Developer" company="Createch" date="July 2023 - April 2024" image='/images/createch.jpeg' />
            <hr />
            <Job title="Backend Developer" company="Megasoft Office" date="May 2024 - Present" image='/images/megasoft.jpeg' />
        </div>
        
    </section>
}