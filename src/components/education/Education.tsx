import { MdSchool } from 'react-icons/md';
import classes from './Education.module.css';
import Degree from './Degree';

export default function Education() {
    return <section id="education" className={classes.container}>
        <h1>My Education</h1>
        <p>
            I'm preparing my Engineer's degree in Computer Science in the Higher School of Computer Science and Technologie ESTIN, where I learned the fundamentals of computer science and software development. I'm specialized in Data Science and Artificial Intelligence. I have a strong background in software development, programming, and computer science, and I am always looking to expand my knowledge and skills in these areas.
        </p>
        <MdSchool className={classes.icon} />
        <div className={classes.degrees}>
            <Degree period="2019 - 2021" title="Baccalaureate Degree in Experimental Sciences" institute="Hrirech Mohammed Ben Aissa High School - Souk Ahras" details="Grade 16.66 / 20" />
            <hr />
            <Degree period="2021 - Present" title="State Engineer degree in Computer Science" institute="Higher School of Computer Science and Technologie ESTIN Bejaia" details="Specialized in Data Science and Artificial Intelligence" />
        </div>
    </section>
}