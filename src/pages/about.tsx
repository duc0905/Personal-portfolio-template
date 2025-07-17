
import React from "react";
import Layout from "../components/Layout";
import * as styles from "./about.module.css";

const AboutPage: React.FC = () => (
  <Layout>
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.paragraph}>
        I'm Your Name, a software developer specializing in building scalable,
        performant web applications with a focus on clean code and great user experience.
      </p>
      <p className={styles.paragraph}>
        I enjoy working with TypeScript, React, Node.js, and modern web technologies.
        Outside coding, I love hiking, photography, and coffee.
      </p>
    </div>
  </Layout>
);

export default AboutPage;
