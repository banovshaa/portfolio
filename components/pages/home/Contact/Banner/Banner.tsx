"use client";

import styles from "./Banner.module.scss";
import { StarIcon } from "@/assets/images/shared.vector";

const Banner = () => {
  const skills = [
    "CSS",
    "HTML",
    "Dashboard",
    "Responsive",
    "JavaScript",
    "Framework",
    "Library",
  ];

  return (
    <div className={styles.banner}>
      <div className={styles.banner_inner}>
        {[...skills, ...skills].map((skill, index) => (
          <div key={`skill__${index}`} className={styles.skill}>
            <p>{skill}</p>
            <StarIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
