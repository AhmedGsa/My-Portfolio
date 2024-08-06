'use client';
import HeroHeader from "./HeroHeader";
import classes from "./Hero.module.css";
import Button from "../common/Button";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className={classes.container}>
        <div className={classes.content}>
            <HeroHeader />
            <p>
                I'm a full-stack developer with a passion for creating beautiful and functional web and mobile applications.
            </p>
            <Button href="#about">My Projects <FaArrowRight /></Button>
        </div>
        <div className={classes.asset}>
            <Image src="/images/yellow-circle.png" alt="Hero Image" width={500} height={500} />
        </div>
    </section>
  );
}