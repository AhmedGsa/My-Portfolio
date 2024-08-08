import classes from './Projects.module.css';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
export default function Project({ href, title, description, image }: { href: string, title: string, description: string, image: string }) {
    return <Link href={href} className={classes.project}>
        <div className={classes.image}>
            <img src={image} alt="Project" />
        </div>
        <div className={classes.info}>
            <div className={classes['info-text']}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <FaArrowRightLong className={classes.btn} />
        </div>
    </Link>
}