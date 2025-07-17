import React, { ReactNode, useEffect, useState } from "react";
import { Link } from "gatsby";
import * as styles from "./Layout.module.css";
import * as theme from "../styles/theme.module.css"; // Import CSS variables globally
import "../styles/reset.module.css"

type LayoutProps = { children: ReactNode };

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) document.body.classList.add(theme.dark);
        else document.body.classList.remove(theme.dark);
        setDarkMode(prefersDark);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle(theme.dark);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>My Portfolio</h1>
                <nav className={styles.navBar}>
                    <div>
                        <Link to="/" className={styles.navLink}>Home</Link>
                        <Link to="/about" className={styles.navLink}>About</Link>
                        <Link to="/projects" className={styles.navLink}>Projects</Link>
                        <Link to="/contact" className={styles.navLink}>Contact</Link>
                    </div>
                    <div>
                        <button
                            onClick={toggleDarkMode}
                            className={styles.themeToggle}
                        >
                            {darkMode ? '🌞 Light' : '🌙 Dark'}
                        </button>
                    </div>
                </nav>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
                &copy; {new Date().getFullYear()} Your Name
            </footer>
        </div>
    );
};

export default Layout;
