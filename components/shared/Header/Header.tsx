import { headerNav } from "@/constants/navigation.constant";
import styles from "./Header.module.scss";
import Link from "next/link";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <nav className={styles.header__inner}>
        {headerNav.slice(0, 3).map((element, index) => (
          <Link href={element.path} key={`navL_${index}`}>
            <span>{element.name}</span>
          </Link>
        ))}
        <Logo />
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
