import { useState, useEffect } from "react";
import { Button, Text, Textarea, TextInput } from "@mantine/core";
import Squidward from "../../assets/images/ContactSection/Squidward.png";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.email || !form.subject || !form.message) return;

    const response = await fetch("https://formspree.io/f/xrblyjkq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        subject: form.subject,
        message: form.message,
      }),
    });

    if (response.ok) {
      setShowSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  useEffect(() => {
    if (!showSuccess) return;
    const timer = setTimeout(() => setShowSuccess(false), 3000);
    return () => clearTimeout(timer);
  }, [showSuccess]);

  return (
    <section className={styles.contactSection} id='contact'>
      <form
        className={styles.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <Text className={styles.heading}>Get In Touch</Text>
        <div className={styles.fields}>
          <div className={styles.topField}>
            <TextInput
              label='First Name'
              placeholder='First Name'
              classNames={{
                root: styles.nameInputWrapper,
                input: `${styles.nameInput} ${styles.whiteInput}`,
                label: styles.label,
              }}
              value={form.firstName}
              onChange={(e) => handleChange("firstName", e.currentTarget.value)}
            />
            <TextInput
              label='Last Name'
              placeholder='Last Name'
              classNames={{
                root: styles.nameInputWrapper,
                input: `${styles.nameInput} ${styles.whiteInput}`,
                label: styles.label,
              }}
              value={form.lastName}
              onChange={(e) => handleChange("lastName", e.currentTarget.value)}
            />
          </div>

          <TextInput
            label='Your Email'
            placeholder='youremail@domain.com'
            classNames={{
              input: `${styles.emailAddressInput} ${styles.whiteInput}`,
              label: styles.label,
            }}
            required
            value={form.email}
            onChange={(e) => handleChange("email", e.currentTarget.value)}
          />

          <TextInput
            mt='md'
            label='Subject'
            placeholder='Subject'
            classNames={{
              input: `${styles.emailSubjectInput} ${styles.whiteInput}`,
              label: styles.label,
            }}
            required
            value={form.subject}
            onChange={(e) => handleChange("subject", e.currentTarget.value)}
          />

          <Textarea
            mt='md'
            label='Your Message'
            placeholder='Please include all relevant information'
            classNames={{
              input: `${styles.emailMessageInput} ${styles.whiteInput}`,
              label: styles.label,
            }}
            minRows={3}
            required
            value={form.message}
            onChange={(e) => handleChange("message", e.currentTarget.value)}
          />

          <Button
            type='submit'
            className={styles.button}
            onClick={handleSubmit}
          >
            Send Message
          </Button>
          {showSuccess && (
            <Text mt='md' className={styles.successOverlay}>
              Message Sent!
            </Text>
          )}
        </div>
      </form>
              <div className={styles.imageContainer}>
          <img src={Squidward} alt='koko' className={styles.image} />
        </div>
    </section>
  );
}
