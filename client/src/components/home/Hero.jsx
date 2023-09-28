import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.tagline}>
          <div className={styles.tagline1}>Justice!</div>
          <div className={styles.tagline2}>Now Served At Home</div>
        </div>
        <div className={styles.img}>image</div>
      </div>
      <div className={styles.imgtext}>
        <span>Not Just A Booking Website</span>
        <button className={styles.butt}>Sign Up {'->'}</button>
      </div>
      <div className={styles.main}>
        <div className={styles.gradient}></div>{" "}
      </div>
    </div>
  );
};

export default Hero;
