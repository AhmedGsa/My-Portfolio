import Link from 'next/link';
import classes from './Footer.module.css';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';

export default function Footer() {
    return <footer className={classes.footer}>
        <h2>Portfolio</h2>
        <p>© 2024 Ahmed Gouasmia. All rights reserved.</p>
        <div className={classes['social-links']}>
            <Link href='https://www.facebook.com'>
                <FaFacebookF className={classes['social-icon']} />
            </Link>
            <Link href='https://www.instagram.com'>
                <FaInstagram className={classes['social-icon']} />
            </Link>
            <Link href='https://www.linkedin.com'>
                <GrLinkedinOption  className={classes['social-icon']} />
            </Link>
            <Link href='https://www.github.com'>
                <FaGithub className={classes['social-icon']} />
            </Link>
        </div>
    </footer>
}