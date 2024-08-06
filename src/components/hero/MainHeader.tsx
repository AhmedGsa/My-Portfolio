'use client';
import classes from './MainHeader.module.css';
import NavLink from '../common/NavLink';
import Button from '../common/Button';

export default function MainHeader() {
    const hireMeHandler = () => {
        // navigate to contact page
        
    }
    return <header className={classes.header}>
        <div className={classes.logo}>Portfolio</div>
        <nav className={classes.nav}>
            <ul>
                <NavLink href='/#hero'>Home</NavLink>
                <NavLink href='/#about-me'>About Me</NavLink>
                <NavLink href='/#services'>Services</NavLink>
                <NavLink href='/#projects'>Projects</NavLink>
                <NavLink href='/#contact'>Contact</NavLink>
            </ul>
            <Button onClick={hireMeHandler}>Hire Me!</Button>
        </nav>
    </header>
}