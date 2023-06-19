import React, { useState } from "react";
import styles from "./Sign-in.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { login } from "../../api/callApi"; // importez la fonction login de votre fichier callApi
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        login(email, password)
            .then(user => {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: {
                        user,
                    },
                });
                navigate("/users"); // redirigez l'utilisateur vers la page /users
            })
            .catch(error => {
                console.log("quelque chose va po")
            });
    };

    return (
        <div className={styles.signin}>
            <Header />
            <main className={`${styles.main} ${styles.bgDark}`}>
                <section className={styles.signInContent}>
                    <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div className={styles.inputRemember}>
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button type="submit" className={styles.signInButton}>
                            Sign In
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default SignIn;

