import React from 'react'
import styles from './LicenseInfo.module.css'

const LicenseInfo = (props) => {
  return (
    <div>
      <h2 className={styles.heading}>License Information</h2>
            <div className={styles.infoContainer}>
                <div>
                    <span className={styles.label}>Bar Association</span>
                    <div>{props.info.barAssociation}</div>
                </div>
                <div>
                    <span className={styles.label}>Bar Year</span>
                    <div>{props.info.barYear}</div>
                </div>
                <div>
                    <span className={styles.label}>Bar State</span>
                    <div>{props.info.barState}</div>
                </div>
                <div>
                    <span className={styles.label}>Years of Experince</span>
                    <div>{props.info.experience}+</div>
                </div>
                <div>
                    <span className={styles.label}>Practice Type</span>
                    <div>{props.info.lawyerType}</div>
                </div>
            </div>
    </div>
  )
}

export default LicenseInfo
