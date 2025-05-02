"use client";

import Link from "next/link";
import styles from "./ProjectCard.module.scss";
import { ArrowRightIcon } from "@/assets/images/shared.vector";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
type CardOptions = {
  name: string;
  url: string;
  image?: StaticImageData;
};
const ProjectCard = ({ options }: { options: CardOptions }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className={`${styles.card}  ${isHovered && styles.hovered}`}>
      <Link href={options.url} className={styles.redirect_btn} target="_blank">
        <ArrowRightIcon color={isHovered ? "#fff" : "#7790ED"} />
      </Link>
      {options.image && <Image src={options.image} alt="Project image" />}
      <div
        className={styles.title_wrapper}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className={styles.title}>{options.name}</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci rem
          tempore quasi maiores doloremque corrupti quidem sequi vitae minima
          impedit.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
