import { ArrowIcon, SendIcon } from "@/assets/images/shared.vector";
import Button from "../Button/Button";
import styles from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import { headerNav, socials } from "@/constants/navigation.constant";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <h2>Lets Connect there</h2>
        <Button name="Hire me" icon={ArrowIcon} />
      </div>
      <div className={styles.footer__content}>
        <div className={styles.left}>
          <Logo />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
          <div className={styles.socials}>
            {socials.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link href={item.path} key={`${item.name}__${index}`}>
                  {Icon && <Icon />}
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.content__box}>
            <p className={styles.box__title}>Navigation</p>
            <nav>
              {headerNav.map((element, index) => (
                <Link href={element.path} key={`nav_${index}`}>
                  <span>{element.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className={styles.content__box}>
            <p className={styles.box__title}>Contact</p>
            <nav>
              <Link href={"tel:+994775143517"}>+994 775143517</Link>
              <Link href={"mailto:abdiyeva.banovsha@gmail.com"}>
                abdiyeva.banovsha@gmail.com
              </Link>
              <Link href={"https://ba-dev.vercel.app/"}>
                https://ba-dev.vercel.app/
              </Link>
            </nav>
          </div>
          <div className={styles.content__box}>
            <p className={styles.box__title}>Get the latest information</p>
            <form className={styles.contact__form}>
              <div className={styles.input__box}>
                <input type="email" placeholder="Email Address" />
                <button>
                  <SendIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright© 2025 Banovsha. All Rights Reserved.</p>
        <p>User Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
