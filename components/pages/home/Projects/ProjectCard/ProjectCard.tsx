import Link from "next/link";
import styles from "./ProjectCard.module.scss";
import { ArrowRightIcon } from "@/assets/images/shared.vector";
import Image from "next/image";
import WebsiteDemoIMG from "@/assets/images/demo_website.jpeg";
type CardOptions = {
  name: string;
  url: string;
  image?: string;
};
const ProjectCard = ({ options }: { options: CardOptions }) => {
  return (
    <div className={styles.card}>
      <Link href={options.url} className={styles.redirect__btn}>
        <ArrowRightIcon />
      </Link>
      {options.image && <Image src={WebsiteDemoIMG} alt="Project image" />}
      <p className={styles.title}>{options.name}</p>
    </div>
  );
};

export default ProjectCard;
