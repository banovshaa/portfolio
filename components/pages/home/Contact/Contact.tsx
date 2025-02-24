import Button from "@/components/shared/Button/Button";
import styles from "./Contact.module.scss";
import { MailIcon } from "@/assets/images/shared.vector";
import React from "react";
import Banner from "./Banner/Banner";

const Contact = () => {
  return (
    <section className={`${styles.contact}`}>
      <div className={styles.contact__inner}>
        <h1>
          Have an Awsome Project Idea? <span>Let’s Discuss</span>
        </h1>
        <div className={styles.input__box}>
          <div className={styles.icon}>
            <MailIcon />
          </div>
          <input type="email" placeholder="Enter Email Address" />
          <div className={styles.send__btn}>
            <Button name="Send" height={64} />
          </div>
        </div>
      </div>
      <Banner />
    </section>
  );
};

export default Contact;
