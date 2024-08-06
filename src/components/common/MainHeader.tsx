import classes from './MainHeader.module.css';
import NavLink from './NavLink';
import Button from './Button';

export default function MainHeader() {
    return <header className={classes.header}>
        <div className={classes.logo}>Portfolio</div>
        <nav className={classes.nav}>
            <ul>
                <NavLink href='/#hero'>Home</NavLink>
                <NavLink href='/#services'>Services</NavLink>
                <NavLink href='/#about-me'>About Me</NavLink>
                <NavLink href='/#projects'>Projects</NavLink>
                <NavLink href='/#contact'>Contact</NavLink>
            </ul>
            <Button href='#contact'>Hire Me!</Button>
        </nav>
    </header>
}