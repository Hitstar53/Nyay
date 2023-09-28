import React from 'react'
import styles from './EducationInfo.module.css'

const EducationInfo = () => {
  return (
    <div>
      <h2 className={styles.heading}>Educational Information</h2>
            <div className={styles.infoContainer}>
                <div>
                    <span className={styles.label}>Institute</span>
                    <div>National Institute of Law, Gujurat</div>
                </div>
                <div>
                    <span className={styles.label}>Graduation Year</span>
                    <div>2000</div>
                </div>
                <div>
                    <span className={styles.label}>Degree</span>
                    <div>LLB</div>
                </div>
                <div>
                    <span className={styles.label}>Result</span>
                    <div>Distinction</div>
                </div>
            </div>
    </div>
  )
}

export default EducationInfo
