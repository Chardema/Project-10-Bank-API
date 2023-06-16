import React from "react";
import styles from "./Sign-in.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
const SignIn = () => {
    return (
        <div className={styles.signin}>
            <Header />
            <main className={`${styles.main} ${styles.bgDark}`}>
                <section className={styles.signInContent}>
                    <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className={styles.inputRemember}>
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        {/* PLACEHOLDER DUE TO STATIC SITE */}
                        <a href="./user.html" className={styles.signInButton}>Sign In</a>
                        {/* SHOULD BE THE BUTTON BELOW */}
                        {/* <button class="sign-in-button">Sign In</button> */}
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default SignIn;