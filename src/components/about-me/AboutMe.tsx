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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ex eveniet, consequuntur quasi nesciunt aliquid libero aperiam. Vitae, ut suscipit placeat omnis voluptatem sit provident voluptate minus, error minima impedit?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nisi alias saepe, ea vel rerum sequi accusamus veniam similique reiciendis illo aperiam minus illum atque consectetur quasi numquam eligendi placeat.</p>
            <div className={classes.buttons}>
                <Button href='/cv'>Download CV</Button>
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