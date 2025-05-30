import { ArrowIcon } from "@/assets/images/shared.vector";
import Button from "../Button/Button";
import styles from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import { headerNav, socials } from "@/constants/navigation.constant";
import Link from "next/link";
import DownloadButton from "../DownloadButton/DownloadButton";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.footer_top}>
        <h2>Lets Connect there</h2>
        <Button name="Hire me" icon={ArrowIcon} />
      </div>
      <div className={styles.footer_content}>
        <div className={styles.left}>
          <Logo />
          <p>
            Crafted with passion and precision, this portfolio showcases my work
            in front-end development, user experience design, and creative
            problem-solving. Let&apos;s build something great together.
          </p>
          <div className={styles.socials}>
            {socials.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  href={item.path}
                  key={`${item.name}__${index}`}
                  target={"_blank"}
                >
                  {Icon && <Icon />}
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.content_box}>
            <p className={styles.box_title}>Navigation</p>
            <nav>
              {headerNav.map((element, index) => (
                <Link href={element.path} key={`nav_${index}`}>
                  <span>{element.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className={styles.content_box}>
            <p className={styles.box_title}>Contact</p>
            <nav>
              {/* <Link href={"tel:+994775143517"}>+994 775143517</Link> */}
              <Link href={"mailto:abdiyeva.banovsha@gmail.com"}>
                abdiyeva.banovsha@gmail.com
              </Link>
              <Link href={"https://ba-dev.vercel.app/"}>
                https://ba-dev.vercel.app/
              </Link>
            </nav>
          </div>
          <div className={styles.content_box}>
            <p className={styles.box_title}>Download my resume</p>
            {/* <form className={styles.contact_form}>
              <div className={styles.input_box}>
                <input type="email" placeholder="Email Address" />
                <button>
                  <SendIcon />
                </button>
              </div>
            </form> */}
            <DownloadButton />
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
