import React from 'react'
import styles from './EducationInfo.module.css'

const EducationInfo = (props) => {
  return (
    <div>
      <h2 className={styles.heading}>Educational Information</h2>
            <div className={styles.infoContainer}>
                <div>
                    <span className={styles.label}>Institute</span>
                    <div>{props.info.institute}</div>
                </div>
                <div>
                    <span className={styles.label}>Graduation Year</span>
                    <div>{props.info.gradYear}</div>
                </div>
                <div>
                    <span className={styles.label}>Degree</span>
                    <div>{props.info.degree}</div>
                </div>
                <div>
                    <span className={styles.label}>Result</span>
                    <div>{props.info.result}</div>
                </div>
            </div>
    </div>
  )
}

export default EducationInfo
