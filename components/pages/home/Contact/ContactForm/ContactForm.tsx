"use client";

import { FormEvent } from "react";
import styles from "./ContactForm.module.scss";
import { MailIcon, UserIcon } from "@/assets/images/shared.vector";
import Button from "@/components/shared/Button/Button";
import Input from "@/components/shared/Input/Input";
import Textarea from "@/components/shared/Textarea/Textarea";
import { useToast } from "@/components/providers/ToastProvider";

const ContactForm = () => {
  const toast = useToast();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "df71c812-961a-4208-854b-43cf95b3bace");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      toast?.open(result.message);
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.contact_form}>
      <div className={styles.inputs}>
        <Input
          icon={UserIcon}
          required
          type="text"
          placeholder="Enter Your Name"
          name="name"
        />
        <Input
          icon={MailIcon}
          required
          type="email"
          placeholder="Enter Email Address"
          name="email"
        />
      </div>

      <Textarea name="message" placeholder="Enter Your message" />
      <div className={styles.send_btn}>
        <Button name="Send" style={{ width: "100%", height: 56 }} />
      </div>
    </form>
  );
};

export default ContactForm;
