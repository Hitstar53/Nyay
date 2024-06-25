import React from 'react'
import styles from './SkillSet.module.css'

const SkillSet = () => {
  return (
    <div>
      <h2 className={styles.heading}>Practice Areas</h2>
      <div className={styles.wrapper}>
        <span className={styles.pills}>Civil Litigation</span>
        <span className={styles.pills}>Bankruptcy</span>
        <span className={styles.pills}>Financial Fraud</span>
        <span className={styles.pills}>Contract Law</span>
        <span className={styles.pills}>Corporate Law</span>
        <span className={styles.pills}>Alimony Law</span>
      </div>
      <h2 className={styles.heading}>Specialization</h2>
      <div className={styles.wrapper}>
        <span className={styles.pills}>Corporate Law</span>
        <span className={styles.pills}>Bankruptcy</span>
      </div>
      <h2 className={styles.heading}>Spoken Languages</h2>
      <div className={styles.wrapper}>
        <span className={styles.pills}>English</span>
        <span className={styles.pills}>Hindi</span>
        <span className={styles.pills}>Punjabi</span>
        <span className={styles.pills}>Marathi</span>
      </div>
    </div>
  )
}

export default SkillSet
