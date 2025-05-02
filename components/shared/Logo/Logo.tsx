import styles from "./Logo.module.scss";
import Image from "next/image";
import LogoImage from "@/assets/images/Logo.svg";

const Logo = () => {
  return (
    <div className={styles.logo_wrapper}>
      <div className={styles.logo}>
        <Image src={LogoImage} alt="Logo" />
      </div>
      <div className={styles.visible}>
        <h4>Code</h4>
      </div>
      <div className={styles.hidden}>
        <p className={styles.auth}>Made by</p>
        <h4>Banovsha Abdiyeva</h4>
      </div>
    </div>
  );
};

export default Logo;
