
import React from "react";
import Layout from "../components/Layout";
import * as styles from "./projects.module.css";

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: "Project One",
      description:
        "A web app that does X, built with React and Node.js.",
      link: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      description:
        "A tool for Y that uses TypeScript and GraphQL.",
      link: "https://github.com/yourusername/project-two",
    },
    // Add more projects as needed
  ];

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Projects</h1>
        <ul className={styles.projectList}>
          {projects.map(({ title, description, link }) => (
            <li key={title} className={styles.projectItem}>
              <h2 className={styles.projectTitle}>{title}</h2>
              <p className={styles.projectDescription}>{description}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View on GitHub →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
