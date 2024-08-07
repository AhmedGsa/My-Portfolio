import classes from './Experience.module.css';

export default function Job({ title, company, date } : { title: string, company: string, date: string }) {
    return <div className={classes.job}>
        <h2>{date}</h2>
        <div className={classes.right}>
            <h1>{title}</h1>
            <h2>{company}</h2>
        </div>
    </div>
}