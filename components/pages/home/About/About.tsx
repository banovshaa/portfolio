"use client";

import Image from "next/image";
import styles from "./About.module.scss";
import HoverBG from "@/assets/images/about_hover_bg.png";
import { useState } from "react";

const About = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <section className={`${styles.about} ${isHovered && styles.hovered}`}>
      <div
        className={styles.about__left}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
      <div className={styles.about__right}>
        <h2>
          Why <span>Hire me</span>?
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales{" "}
        </p>
        <button>Hire me</button>
      </div>
      <Image src={HoverBG} alt={"Hover bg"} className={styles.hover__img} />
    </section>
  );
};

export default About;
