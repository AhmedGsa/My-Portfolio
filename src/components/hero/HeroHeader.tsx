import Image from "next/image";
import classes from "./HeroHeader.module.css";

export default function HeroHeader() {
    return <header className={classes['hero-header']}>
        <h1>Software Development By Ahmed Gouasmia</h1>
        <div className={classes['service-slider']}>
            <div className={classes['service-text-slide']}>
                <h2>Fullstack Developer</h2>
                <Image src="/images/north-star.png" alt="North Star Image" width='50' height='50' />
                <h2>Artificial Intelligence and Data Science Student</h2>
            </div>
        </div>
    </header>
}