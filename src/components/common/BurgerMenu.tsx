import classes from './MainHeader.module.css';

export default function BurgerMenu({ isActive, handleClick }: { isActive: boolean, handleClick: () => void }) {
    
    return <div className={
        isActive ? `${classes['burger-menu']} ${classes.active}` : classes['burger-menu']
    } onClick={handleClick} >
        <div className={classes.line}></div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
    </div>
}