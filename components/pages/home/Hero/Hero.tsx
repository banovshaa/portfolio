"use client";

import { AttributeIcon, QuotIcon } from "@/assets/images/shared.vector";
import styles from "./Hero.module.scss";
import Tabs from "./Tabs/Tabs";
import HoverBG from "@/assets/images/hero_bg_hover.png";
import Image from "next/image";
import { useState } from "react";
import UserAvatar from "@/assets/images/me2.png";

const Hero = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <section
      className={`${styles.hero} ${isHovered && styles.hovered} container`}
    >
      <div className={styles.hero_top}>
        <div className={styles.element_wrapper}>
          <div className={styles.badge}>
            <span>Hello!</span>
            <span className={styles.icon}>
              <AttributeIcon size={24} />
            </span>
          </div>
        </div>
        <h1 className={styles.title}>
          I’m <span>Banovsha</span>, <br />
          Front-End Developer
          <span className={styles.icon}>
            <AttributeIcon size={66} />
          </span>
        </h1>
      </div>
      <div className={styles.comment_wrapper}>
        <QuotIcon />
        <p className={styles.comment}>
          With a keen eye for detail and a drive to constantly learn, I craft
          seamless user experiences that bring ideas to life.
        </p>
      </div>
      <div className={styles.element_wrapper}>
        <div
          className={styles.circle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={UserAvatar}
            alt="User avatar"
            className={styles.user_avatar}
          />
        </div>
      </div>
      <Tabs />
      <div className={styles.img_hover}>
        <Image src={HoverBG} alt="Hover Image" />
      </div>
    </section>
  );
};

export default Hero;
