
import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./404.module.css";

const NotFoundPage: React.FC = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className={styles.homeLink}>Go back home</Link>
    </main>
  );
};

export default NotFoundPage;
