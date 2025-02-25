import styles from "./Contact.module.scss";
import Banner from "./Banner/Banner";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className={`${styles.contact}`}>
      <div className={styles.contact__inner}>
        <h1>
          Have an Awsome Project Idea? <span>Let’s Discuss</span>
        </h1>
        <ContactForm />
      </div>
      <Banner />
    </section>
  );
};

export default Contact;
