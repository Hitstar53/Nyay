import React from 'react'
import styles from './Awards.module.css'

const Awards = () => {
  return (
    <div>
      <h2 className={styles.heading}>Awards & Honours</h2>
      <div className={styles.awardContainer}>
        <span className={styles.pills}>
          <i className="fas fa-award"></i>
          <p>National Award in Fighting Fraudulent Crimes</p>
        </span>
        <span className={styles.pills}>
          <i className="fas fa-award"></i>
          <p>Most Pro Bono Cases</p>
        </span>
      </div>
    </div>
  )
}

export default Awards
