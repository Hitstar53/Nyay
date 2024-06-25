import React from 'react'
import styles from './Publications.module.css'

const Publications = () => {
  return (
    <div>
      <h2 className={styles.heading}>Publications</h2>
      <div className={styles.publications}>
        <div className={styles.publicationCard}>
          <div className={styles.pubcHeader}>
            <h4 className={styles.pubcTitle}>Children forced to carry garbage & work in dumping grounds.</h4>
            <h5 className={styles.pubcDate}>10 Jan, 2007</h5>
          </div>
          <div className={styles.pubcDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</div>
          <div className={styles.pubcImg}></div>
          <div className={styles.pubcName}>Times of India</div>
        </div>
        <div className={styles.publicationCard}>
          <div className={styles.pubcHeader}>
            <h4 className={styles.pubcTitle}>Children forced to carry garbage & work in dumping grounds.</h4>
            <h5 className={styles.pubcDate}>10 Jan, 2007</h5>
          </div>
          <div className={styles.pubcDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</div>
          <div className={styles.pubcImg}></div>
          <div className={styles.pubcName}>Times of India</div>
        </div>
        <div className={styles.publicationCard}>
          <div className={styles.pubcHeader}>
            <h4 className={styles.pubcTitle}>Children forced to carry garbage & work in dumping grounds.</h4>
            <h5 className={styles.pubcDate}>10 Jan, 2007</h5>
          </div>
          <div className={styles.pubcDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</div>
          <div className={styles.pubcImg}></div>
          <div className={styles.pubcName}>Times of India</div>
        </div>
      </div>
    </div>
  )
}

export default Publications
