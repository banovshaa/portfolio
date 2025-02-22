import { headerNav } from "@/constants/navigation.constant";
import styles from "./Header.module.scss";
import Link from "next/link";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <nav className={styles.header__inner}>
        {headerNav.slice(0, 3).map((element, index) => (
          <Link
            href={element.path}
            key={`navL_${index}`}
            className={index === 0 ? styles.main : ""}
          >
            <span>{element.name}</span>
          </Link>
        ))}
        <div className={styles.logo__wrapper}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.visible}>
            <h4>Code</h4>
          </div>
          <div className={styles.hidden}>
            <p>Made by</p>
            <h4>Banovsha Abdiyeva</h4>
          </div>
        </div>
        {headerNav.slice(3).map((element, index) => (
          <Link href={element.path} key={`navR_${index}`}>
            <span>{element.name}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
