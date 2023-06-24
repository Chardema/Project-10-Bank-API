import React, { useState } from "react";
import styles from "./Sign-in.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector} from 'react-redux'
import {getLocalStorage, setLocalStorage} from "../../services/serviceCookie";
import serviceAuth from "../../services/serviceAuth";
import {useEffect} from "react";

const SignIn = () => {
    const [email, setEmail] = useState(getLocalStorage('email') || '');
    const [password, setPassword] = useState("");
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false)
// vérifie que l'user est connecté ou non pour le rediriger vers /profile
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile', {replace : true});
        }
    }, [isAuthenticated, navigate]);
    const handleEmailChange = event => {
        setEmail(event.target.value);
    };
    //vérifie le changement d'état du bouton remember me pour stocker ou non l'email
    const handleRememberMeChange = event => {
        setRememberMe(event.target.checked);
        if (event.target.checked) {
            setLocalStorage('email', email);
        } else {
            setLocalStorage('email', '');
        }
    };
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        serviceAuth.login(email, password)
            .then(user => {
                setLocalStorage('email',email) // stock l'adresse mail de l'utilisateur
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: {
                        user,
                    },
                });
                navigate("/profile"); // redirigez l'utilisateur vers la page /profile
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
                            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMeChange} />
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

