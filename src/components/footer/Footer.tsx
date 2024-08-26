import Link from 'next/link';
import classes from './Footer.module.css';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';

export default function Footer() {
    return <footer className={classes.footer}>
        <p>© 2024 Ahmed Gouasmia. All rights reserved.</p>
        <div className={classes['social-links']}>
            <Link href='https://www.facebook.com/ahmed.gouasmia.37/'>
                <FaFacebookF className={classes['social-icon']} />
            </Link>
            <Link href='https://www.instagram.com/ahmedgsa/'>
                <FaInstagram className={classes['social-icon']} />
            </Link>
            <Link href='https://www.linkedin.com/in/ahmed-gouasmia-59baa1245/'>
                <GrLinkedinOption  className={classes['social-icon']} />
            </Link>
            <Link href='https://github.com/AhmedGsa'>
                <FaGithub className={classes['social-icon']} />
            </Link>
        </div>
    </footer>
}