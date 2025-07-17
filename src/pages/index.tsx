
import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import * as styles from "./index.module.css";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <section className={styles.container}>
        <h1 className={styles.title}>Hi, I'm Your Name 👋</h1>
        <StaticImage
          className={styles.profileImage}
          src="../images/profile.jpg"
          alt="Your Name"
          placeholder="blurred"
          width={150}
          height={150}
        />
        <h2 className={styles.subtitle}>Software Developer</h2>
        <p className={styles.paragraph}>
          I build clean, scalable web applications using modern tools like TypeScript, React, and Node.js.
          Passionate about performance, accessibility, and minimal design.
        </p>
      </section>

      <section className={styles.sectionCenter}>
        <h2>Featured Projects</h2>
        <ul className={styles.projectsList}>
          <li className={styles.projectItem}>
            <h3>📌 Project One</h3>
            <p>Short description of what this project does and what tech you used.</p>
            <a
              href="https://github.com/yourusername/project-one"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              View on GitHub →
            </a>
          </li>
          <li className={styles.projectItem}>
            <h3>📌 Project Two</h3>
            <p>Another project description, what problem it solves, and technologies used.</p>
            <a
              href="https://github.com/yourusername/project-two"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              View on GitHub →
            </a>
          </li>
        </ul>
        <p>
          <Link to="/projects" className={styles.projectLink}>
            See all projects →
          </Link>
        </p>
      </section>

      <section className={styles.sectionCenter}>
        <h2>Get in Touch</h2>
        <p>
          I’m open to new opportunities or collaborations.{" "}
          <a href="mailto:youremail@example.com" className={styles.projectLink}>
            Say hello →
          </a>
        </p>
      </section>
    </Layout>
  );
};

export default IndexPage;
