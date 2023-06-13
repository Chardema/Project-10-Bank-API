import React from 'react';
import styles from "./Header.module.scss";
import logo from "./../../img/argentbank.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <nav className={styles.mainnav}>
            <a className={styles.mainnavlogo} href="./index.html">
                <img
                    className={styles.mainnavlogoimage}
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className={styles.sronly}>Argent Bank</h1>
            </a>
            <div>
                <a className={styles.mainnavitem} href="./sign-in.html">
                    <FontAwesomeIcon icon="user-circle" />
                    Sign In
                </a>
            </div>
        </nav>
    );
}

export default Header;
