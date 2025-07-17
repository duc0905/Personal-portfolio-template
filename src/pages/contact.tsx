
import React, { useState } from "react";
import Layout from "../components/Layout";
import * as styles from "./contact.module.css";

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${form.name}!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Me</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className={styles.input}
          />

          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className={styles.input}
          />

          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            className={styles.textarea}
          />

          <button type="submit" className={styles.button}>Send</button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
