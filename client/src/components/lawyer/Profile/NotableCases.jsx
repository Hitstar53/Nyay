import React from 'react'
import styles from './NotableCases.module.css'

const NotableCases = () => {
    return (
        <div>
            <h2 className={styles.heading}>Notable Case</h2>
            <div className={styles.caseContainer}>
                <div className={styles.caseHeading}>
                    <h4>Children forced to carry garbage and work in dumping grounds</h4>
                    <h5>10 Januray, 2007</h5>
                </div>
                <div className={styles.caseTags}>
                    <span className={styles.pills}>Child Labour</span>
                    <span className={styles.pills}>Child Rights</span>
                </div>
                <div className={styles.caseDescription}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
            </div>
        </div>
    )
}

export default NotableCases
