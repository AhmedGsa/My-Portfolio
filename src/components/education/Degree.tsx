import classes from './Education.module.css';

export default function Degree({ period, title, institute, details }: { period: string, title: string, institute: string, details: string }) {
    return <div className={classes.degree}>
        <h2>{period}</h2>
        <h1>{title}</h1>
        <h3>{institute}</h3>
        <p>{details}</p>
    </div>
}