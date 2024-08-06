import { ReactNode } from 'react';
import classes from './Services.module.css';

export default function ServiceCard({ title, description, icon } : { title: string, description: string, icon: ReactNode }) {
    return (
        <div className={classes.service}>
            {icon}
            <h3>{title}</h3>
            <p>
                {description}
            </p>
            <div className={classes.fill} ></div>
        </div>
    );
}