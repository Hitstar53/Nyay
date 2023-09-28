import React from 'react'
import Appointment from './Appointment'
import styles from './Appointreq.module.css'

const Appointreq = () => {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <Appointment />
        <Appointment />
        <Appointment />
      </div>
    </div>
  )
}

export default Appointreq