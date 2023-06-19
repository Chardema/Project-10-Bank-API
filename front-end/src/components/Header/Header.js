import React from "react";
import styles from "./Header.module.scss";
import logo from "./../../img/argentbank.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };

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
                {isAuthenticated ? (
                    <button onClick={handleLogoutClick} className={styles.mainnavitem}>
                        <FontAwesomeIcon icon="sign-out-alt" />
                        Log Out
                    </button>
                ) : (
                    <Link to="/sign-in" className={styles.mainnavitem}>
                        <FontAwesomeIcon icon="user-circle" />
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Header;



