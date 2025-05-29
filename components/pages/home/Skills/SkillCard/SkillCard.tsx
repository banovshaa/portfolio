import Image from "next/image";
import styles from "./SkillCard.module.scss";
import { StaticImageData } from "next/image";

type CardOptions = {
  name: string;
  image?: StaticImageData;
  desc?: string;
};
const SkillCard = ({ options }: { options: CardOptions }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        <div className={styles.icon}>
          {options.image && <Image src={options.image} alt="Skill image" />}
        </div>
        <h4>{options.name}</h4>
      </div>
      <p className={styles.bottom_text}>{options.desc}</p>
    </div>
  );
};

export default SkillCard;
