import React from 'react'
import Appointment from './Appointment'
import styles from './Appointreq.module.css'

const Appointreq = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        {props.info.map((apt) => (
          console.log(apt),
          <Appointment
            key={apt._id}
            id={apt._id}
            lawyerName={apt.lawyerName}
            clientName={apt.clientName}
            description={apt.description}
            aptDate={apt.aptDate}
            startTime={apt.startTime}
            endTime={apt.endTime}
          />
        ))}
      </div>
    </div>
  )
}

export default Appointreq