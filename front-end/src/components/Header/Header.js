import React from 'react';
import styles from "./Header.module.scss";
import logo from "./../../img/argentbank.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom"; // Importez le composant Link

function Header() {
    return (
        <nav className={styles.mainnav}>
            <Link to="/" className={styles.mainnavlogo}>
                <img
                    className={styles.mainnavlogoimage}
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className={styles.sronly}>Argent Bank</h1>
            </Link>
            <div>
                <Link to="/sign-in" className={styles.mainnavitem}>
                    <FontAwesomeIcon icon="user-circle" />
                    Sign In
                </Link>
            </div>
        </nav>
    );
}

export default Header;

