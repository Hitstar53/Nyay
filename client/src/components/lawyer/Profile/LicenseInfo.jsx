import React from 'react'
import styles from './LicenseInfo.module.css'

const LicenseInfo = () => {
  return (
    <div>
      <h2 className={styles.heading}>License Information</h2>
            <div className={styles.infoContainer}>
                <div>
                    <span className={styles.label}>Bar Association</span>
                    <div>National Institute of Law</div>
                </div>
                <div>
                    <span className={styles.label}>Bar Year</span>
                    <div>2000</div>
                </div>
                <div>
                    <span className={styles.label}>Bar State</span>
                    <div>Gujurat</div>
                </div>
                <div>
                    <span className={styles.label}>Years of Experince</span>
                    <div>21+</div>
                </div>
                <div>
                    <span className={styles.label}>Practice Type</span>
                    <div>Retired Lawyer</div>
                </div>
            </div>
    </div>
  )
}

export default LicenseInfo
