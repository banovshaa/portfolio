"use client";

import { ArrowIcon } from "@/assets/images/shared.vector";
import styles from "./Tabs.module.scss";
import { useState } from "react";

const Tabs = () => {
  const tabs = [
    { name: "Portfolio", value: "portfolio" },
    { name: "Hire me", value: "hire" },
  ];
  const [active, setActive] = useState<string>(tabs[0].value);
  return (
    <div className={styles.tabs}>
      {tabs.map((tab, index) => (
        <div
          key={`${tab.value}__${index}`}
          className={`${styles.tab} ${
            active === tab.value ? styles.active : ""
          }`}
          onMouseEnter={() => setActive(tab.value)}
          onMouseLeave={() => setActive(tabs[0].value)}
        >
          <p>{tab.name}</p>
          <div className={styles.icon}>
            <ArrowIcon size={40} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
