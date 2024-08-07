import Image from 'next/image';
import classes from './Experience.module.css';

export default function Job({ title, company, date, image } : { title: string, company: string, date: string, image: string }) {
    return <div className={classes.job}>
        <h2>{date}</h2>
        <div className={classes.right}>
            <Image src={image} width={100} height={100} alt="Experience" />
            <div className={classes.info}>
                <h1>{title}</h1>
                <h2>{company}</h2>
            </div>
        </div>
    </div>
}