import { RiComputerLine } from 'react-icons/ri';
import ServiceCard from './ServiceCard';
import classes from './Services.module.css';
import { FaMobileScreen, FaServer } from 'react-icons/fa6';

export default function Services() {
    return (
        <section id="services" className={classes.container}>
            <h1>My Services</h1>
            <p>
                I offer a range of awesome services to help you achieve your goals.
            </p>
            <div className={classes.services}>
                <ServiceCard icon={<RiComputerLine className={classes.icon} />} title='Web Development' description='I can help you build a website that will help you stand out from the competition.' />
                <ServiceCard icon={<FaMobileScreen className={classes.icon} />} title='Mobile Development' description='I can help you build a mobile app that will help you reach your customers on the go.' />
                <ServiceCard icon={<FaServer className={classes.icon} />} title='Deployment' description='I can help you deploy your website or app to the cloud so you can scale with ease.' />
            </div>
        </section>
    );
}