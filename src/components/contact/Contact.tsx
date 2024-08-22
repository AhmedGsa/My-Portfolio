import classes from './Contact.module.css';
import bg from '../../../public/images/purple-shape.svg';
import ContactForm from './ContactForm';

export default function Contact() {
    return <section id="contact" className={classes.container}>
        <div className={classes.shape} style={
            { backgroundImage: `url(${bg.src})` }
        }>
            <div className={classes.overlay}>
                <h1>Let's work together</h1>
                <p>Let's collaborate to turn your vision into reality! Get in touch today, let's create something amazing together!</p>
            </div>
            <ContactForm />
        </div>
    </section>
}