import React from 'react'
import styles from './Awards.module.css'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const Awards = () => {
  return (
    <div>
      <h2 className={styles.heading}>Awards & Honours</h2>
      <div className={styles.awardContainer}>
        <span className={styles.pills}><MilitaryTechIcon sx={{"width": "3rem", "height": "3rem"}}/> <span>National Award in Fighting Fraudulent Crimes</span></span>
        <span className={styles.pills}><EmojiEventsIcon sx={{"width": "3rem", "height": "3rem"}}/> <span>Most Pro Bono Cases</span></span>
      </div>
    </div>
  )
}

export default Awards
