import React from "react";
import styles from "./Header.module.scss";
import logo from "./../../img/argentbank.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {deleteLocalStorage} from "../../services/serviceCookie";

function Header() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const firstName = useSelector(state => state.user.firstName);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        deleteLocalStorage('signin-token');
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
                    <>
                        <Link to="/profile" className={styles.profile}>
                            <FontAwesomeIcon icon="user-circle" className={styles.profileicon} />
                            {firstName}
                        </Link>
                        <button onClick={handleLogoutClick} className={styles.logout}>
                            <FontAwesomeIcon icon="sign-out-alt" className={styles.logouticon} />
                            Log Out
                        </button>
                    </>
                ) : (
                    <Link to="/login" className={styles.login}>
                        <FontAwesomeIcon className={styles.loginicon} icon="user-circle" />
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Header;




