import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import styles from "./Recommendation.module.css";

const Recommendation = () => {
  return (
    <div className={styles.recommendationBlock}>
      <div className={styles.recommendationCardLeft}>
        <div className={styles.img}>image</div>
        <div>
          <h3 className={styles.name}>Mukesh Sharma</h3>
          <span class="star-wrapper">
            <a href="#" class="fas fa-star s1"></a>
            <a href="#" class="fas fa-star s2"></a>
            <a href="#" class="fas fa-star s3"></a>
            <a href="#" class="fas fa-star s4"></a>
            <a href="#" class="fas fa-star s5"></a>
          </span>
          <script src="https://kit.fontawesome.com/5ea815c1d0.js"></script>
          <span> (366)</span>
          <div className={styles.bio}>LLB | LLM</div>
          <div className={styles.location}><LocationOnIcon/> Mumbai, Maharashtra</div>
          <div className={styles.yoe}><WorkIcon/> 11+ Years of experience</div>
          <div className={styles.leftpills}>
            <span className={styles.pill}>Civil Litigation</span>
            <span className={styles.pill}>Civil Litigation</span>
            <span className={styles.pill}>Civil Litigation</span>
          </div>
          <div className={styles.leftpills}>
            <span className={styles.pill}>English</span>
            <span className={styles.pill}>Hindi</span>
            <span className={styles.pill}>Punjabi</span>
          </div>
        </div>
      </div>


      <div className={styles.recommendationCardRight}>
        <div className={styles.details}>
          <h3 className={styles.name}>Mukesh Sharma</h3>
          <span class="star-wrapper">
            <a href="#" class="fas fa-star s1"></a>
            <a href="#" class="fas fa-star s2"></a>
            <a href="#" class="fas fa-star s3"></a>
            <a href="#" class="fas fa-star s4"></a>
            <a href="#" class="fas fa-star s5"></a>
          </span>
          <script src="https://kit.fontawesome.com/5ea815c1d0.js"></script>
          <span> (366)</span>
          <div className={styles.bio}>LLB | LLM</div>
          <div className={styles.location}><LocationOnIcon/> Mumbai, Maharashtra</div>
          <div className={styles.yoe}><WorkIcon/> 11+ Years of experience</div>
          <div className={styles.rightpills}>
            <span className={styles.pill}>Civil Litigation</span>
            <span className={styles.pill}>Civil Litigation</span>
            <span className={styles.pill}>Civil Litigation</span>
          </div>
          <div className={styles.rightpills}>
            <span className={styles.pill}>English</span>
            <span className={styles.pill}>Hindi</span>
            <span className={styles.pill}>Punjabi</span>
          </div>
        </div>
        <div className={styles.img}>image</div>
      </div>
    </div>
  );
};

export default Recommendation;
