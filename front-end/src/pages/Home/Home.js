import React from 'react';
import styles from "../Home/Home.module.scss";
import Header from "../../components/Header/Header";
import Main from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer"

function Home() {
    return (
            <div className={styles.App}>
                <Header />
                <Main />
                <Footer />
            </div>
    );

}

export default Home;