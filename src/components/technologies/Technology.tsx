import classes from './Technologies.module.css';

export default function Technology({name, image}: {name: string, image: string}) {
    return <div className={classes.technology}>
        <img src={image} alt={name} />
        {name}
    </div>
}