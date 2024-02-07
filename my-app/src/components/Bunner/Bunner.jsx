import React from 'react'
import styles from './bunner.module.css';
import bannerLogo from "../Bunner/bunner-img/bunner_logo.svg";
import pathDelimiter from "../Bunner/bunner-img/path-delimiter.svg";

const Bunner = () => {
  return (
    <div className={styles.bunner}>
        <div className={styles.bunner__title_cont}>
            <img src={bannerLogo} alt="logo" />
            <h1>Checkout</h1>
    </div>
    <div className={styles.bunner__path_cont}>
        <h3>Home</h3>
        <img src={pathDelimiter} alt="path delimiter" />
        <p>Checkout</p>

    </div>
    </div>
  )
}

export default Bunner
