import React, { useState } from "react";
import styles from "./Users.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstName } from "./../../api/callApi";

function Users() {
    const dispatch = useDispatch();
    const [isEditingName, setIsEditingName] = useState(false);
    const [newFirstName, setNewFirstName] = useState("");
    const firstName = useSelector(state => state.user.firstName);

    const handleEditNameClick = () => {
        setIsEditingName(true);
    };

    const handleNewFirstNameChange = event => {
        setNewFirstName(event.target.value);
    };

    const handleSaveClick = () => {
        updateFirstName(newFirstName);
        // Mettre à jour la valeur de firstName dans le store Redux
        dispatch({ type: "UPDATE_FIRST_NAME", firstName: newFirstName });
        // Masquer le champ de saisie et le bouton Save
        setIsEditingName(false);
    };

    return (
        <div className={styles.users}>
            <Header />
            <main className={`${styles.main} ${styles.bgDark}`}>
                <div className={styles.header}>
                    {isEditingName ? (
                        <>
                            <input
                                type="text"
                                value={newFirstName}
                                onChange={handleNewFirstNameChange}
                            />
                            <button onClick={handleSaveClick}>Save</button>
                        </>
                    ) : (
                        <h1>
                            Welcome back
                            <br />
                            {firstName}!
                        </h1>
                    )}
                    <button
                        onClick={handleEditNameClick}
                        className={styles.editButton}
                    >
                        Edit Name
                    </button>
                </div>
                <h2 className={styles.srOnly}>Accounts</h2>
                <section className={styles.account}>
                    <div className={styles.accountContentWrapper}>
                        <h3 className={styles.accountTitle}>
                            Argent Bank Checking (x8349)
                        </h3>
                        <p className={styles.accountAmount}>$2,082.79</p>
                        <p className={styles.accountAmountDescription}>
                            Available Balance
                        </p>
                    </div>
                    <div
                        className={`${styles.accountContentWrapper} ${styles.cta}`}
                    >
                        <button className={styles.transactionButton}>
                            View transactions
                        </button>
                    </div>
                </section>
                <section className={styles.account}>
                    <div className={styles.accountContentWrapper}>
                        <h3 className={styles.accountTitle}>
                            Argent Bank Savings (x6712)
                        </h3>
                        <p className={styles.accountAmount}>$10,928.42</p>
                        <p className={styles.accountAmountDescription}>
                            Available Balance
                        </p>
                    </div>
                    <div
                        className={`${styles.accountContentWrapper} ${styles.cta}`}
                    >
                        <button className={styles.transactionButton}>
                            View transactions
                        </button>
                    </div>
                </section>
                <section className={styles.account}>
                    <div className={styles.accountContentWrapper}>
                        <h3 className={styles.accountTitle}>
                            Argent Bank Credit Card (x8349)
                        </h3>
                        <p className={styles.accountAmount}>$184.30</p>
                        <p className={styles.accountAmountDescription}>
                            Current Balance
                        </p>
                    </div>
                    <div
                        className={`${styles.accountContentWrapper} ${styles.cta}`}
                    >
                        <button className={styles.transactionButton}>
                            View transactions
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Users;

