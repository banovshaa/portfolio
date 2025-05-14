"use client";

import { headerNav } from "@/constants/navigation.constant";
import styles from "./Header.module.scss";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { BurgerIcon } from "@/assets/images/shared.vector";
import { useEffect, useState } from "react";

const Header = () => {
  const [burger, setBurger] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(
    typeof window !== "undefined" ? window.innerWidth : undefined
  );
  const handleResize = () => {
    setWindowWidth(
      typeof window !== "undefined" ? window.innerWidth : undefined
    );
  };

  useEffect(() => {
    if (windowWidth && windowWidth > 993) {
      setBurger(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header
      className={`${styles.header} ${burger ? styles.active : ""}  container`}
    >
      <nav className={styles.header_inner}>
        {headerNav.slice(0, 3).map((element, index) => (
          <Link
            href={element.path}
            key={`navL_${index}`}
            className={index === 0 ? styles.main : ""}
          >
            <span>{element.name}</span>
          </Link>
        ))}
        <div className={styles.logo_wrapper}>
          <Logo />
        </div>
        {headerNav.slice(3).map((element, index) => (
          <Link href={element.path} key={`navR_${index}`}>
            <span>{element.name}</span>
          </Link>
        ))}
        <div className={styles.burger}>
          <button
            className={styles.burger_btn}
            onClick={() => {
              setBurger((prevState) => {
                return !prevState;
              });
            }}
          >
            <BurgerIcon />
          </button>
        </div>
      </nav>
      <div className={styles.burger_menu}>
        <nav>
          {headerNav.map((element, index) => (
            <Link href={element.path} key={`nav_${index}`}>
              <span>{element.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
