import Link from 'next/link';
import Button from '../common/Button';
import classes from './AboutMe.module.css';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutMe() {
    return <section id="about-me" className={classes.container}>
        <div className={classes.asset}>
            <Image src="/images/blue-circle.png" alt="About Me Image" width={500} height={500} />
        </div>
        <div className={classes.content}>
            <h2>About Me</h2>
            <h1>Why should you choose me?</h1>
            <p>
                I'm a full-stack developer with a passion for creating beautiful and functional websites. I have experience in both front-end and back-end development, and I'm always looking for new challenges to tackle. Whether you need a simple landing page or a complex web application, I can help you bring your vision to life.
            </p>
            <p>
                I'm proficient in a variety of programming languages and technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB. I'm also familiar with version control systems like Git and have experience working with APIs and third-party libraries. I'm a quick learner and a problem solver, and I'm always eager to learn new things and improve my skills.
            </p>
            <div className={classes.buttons}>
                <Button href='/CV.pdf'>Download CV</Button>
                <div className={classes['social-buttons']}>
                    <Link href='https://www.facebook.com/ahmed.gouasmia.37/'>
                        <FaFacebookF className={classes['social-icon']} />
                    </Link>
                    <Link href='https://www.instagram.com/ahmedgsa/'>
                        <FaInstagramSquare className={classes['social-icon']} />
                    </Link>
                    <Link href='https://www.linkedin.com/in/ahmed-gouasmia-59baa1245/'>
                        <FaLinkedinIn  className={classes['social-icon']} />
                    </Link>
                    <Link href='https://github.com/AhmedGsa'>
                        <FaGithub className={classes['social-icon']} />
                    </Link>
                </div>
            </div>
        </div>
    </section>
}