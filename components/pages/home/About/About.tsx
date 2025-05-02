"use client";

import Image from "next/image";
import styles from "./About.module.scss";
import HoverBG from "@/assets/images/about_hover_bg.png";
import { useState } from "react";
import UserAvatar from "@/assets/images/me1.png";

const About = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <section className={`${styles.about} ${isHovered && styles.hovered}`}>
      <div
        className={styles.about_left}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={UserAvatar}
          alt="User avatar"
          className={styles.user_avatar}
        />
      </div>
      <div className={styles.about_right}>
        <h2>
          Why <span>Hire me</span>?
        </h2>
        <p>
          I am a front-end developer with a passion for creating visually
          appealing, user-friendly websites. With expertise in modern front-end
          technologies, I deliver high-quality, responsive designs that enhance
          user experience. My problem-solving skills, attention to detail, and
          collaborative nature make me a reliable partner for any project. Let
          us create something great together!
        </p>
        <button>Hire me</button>
      </div>
      <Image src={HoverBG} alt={"Hover bg"} className={styles.hover_img} />
    </section>
  );
};

export default About;
