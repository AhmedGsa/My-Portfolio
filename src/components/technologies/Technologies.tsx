import Technology from './Technology';
import classes from './Technologies.module.css';

export default function Technologies() {
    return <section id="technologies" className={classes.container}>
        <h1>Technologies and Tools</h1>
        <p>Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.</p>
        <div className={classes.technologies}>
            <Technology name='HTML' image='/images/html.png' />
            <Technology name='CSS' image='/images/css.png' />
            <Technology name='JavaScript' image='/images/javascript.png' />
            <Technology name='TypeScript' image='/images/typescript.png' />
            <Technology name='Python' image='/images/python.png' />
            <Technology name='React' image='/images/react.png' />
            <Technology name='Next.js' image='/images/nextjs.svg' />
            <Technology name='Node.js' image='/images/nodejs.png' />
            <Technology name='Express' image='/images/express.png' />
            <Technology name='Nest.js' image='/images/nestjs.svg' />
            <Technology name='FastAPI' image='/images/fastapi.svg' />
            <Technology name='MongoDB' image='/images/mongodb.png' />
            <Technology name='MySQL' image='/images/mysql.png' />
            <Technology name='PostgreSQL' image='/images/postgresql.webp' />
            <Technology name='Firebase' image='/images/firebase.png' />
            <Technology name='Docker' image='/images/docker.webp' />
            <Technology name='Git' image='/images/git.png' />
            <Technology name='GitHub' image='/images/github.png' />
            <Technology name='VS Code' image='/images/vscode.png' />
            <Technology name='Postman' image='/images/postman.png' />
        </div>
    </section>
}