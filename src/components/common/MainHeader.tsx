'use client';
import classes from './MainHeader.module.css';
import NavLink from './NavLink';
import Button from './Button';
import BurgerMenu from './BurgerMenu';
import { useState } from 'react';

export default function MainHeader() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    }
    return <header className={classes.header}>
        <div className={classes.logo}>Portfolio</div>
        <nav className={classes.nav}>
            <BurgerMenu isActive={isActive} handleClick={handleClick} />
            <ul className={isActive ? classes.active : undefined}>
                <NavLink onClick={handleClick} href='/#hero'>Home</NavLink>
                <NavLink onClick={handleClick} href='/#services'>Services</NavLink>
                <NavLink onClick={handleClick} href='/#about-me'>About Me</NavLink>
                <NavLink onClick={handleClick} href='/#projects'>Projects</NavLink>
                <NavLink onClick={handleClick} href='/#contact'>Contact</NavLink>
                <Button onClick={handleClick} href='#contact'>Hire Me!</Button>
            </ul>
        </nav>
    </header>
}