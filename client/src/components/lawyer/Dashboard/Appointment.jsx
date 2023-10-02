import React from 'react'
import dayjs from "dayjs";
import { Avatar } from "@mui/material";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import styles from './Appointreq.module.css'

const data = {
  sender: "Roy Moreno",
  senderPhoto: "",
  issue: "sweet hand swing bread speech earth brush report letter soil shinning first send upward treated tide rose want made doll handle syllable mail basic.",
  date: "2/27/2023",
}

const Appointment = (props) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.col1}>
        <p>
          {dayjs(props.aptDate).format("ddd")}
        </p>
        <p className='text-4xl'>
          {dayjs(props.aptDate).format("DD")}
        </p>
        <p>
          {dayjs(props.aptDate).format("MMM")}
        </p>
      </div>
      <div className={styles.col2}>
        <p className='text-xl'>
          {dayjs(props.aptDate).format("hh:mm A")}
        </p>
        <p className='text-base font-normal'>
          {props.startTime}
        </p>
      </div>
      <div className={styles.col3}>
        <div className={styles.sender}>
          <Avatar
            alt={data.sender}
            src={data.senderPhoto}
            sx={{
              width: "2rem",
              height: "2rem",
              alignSelf: "center",
            }}
            className={styles.avatar}
          />
          <h1>{props.clientName}</h1>
        </div>
        <p>{props.description}</p>
      </div>
      <div className={styles.col4}>
        <button className={styles.accept}>Accept</button>
        <button className={styles.reject}>Reject</button>
      </div>
    </div>
  );
}

export default Appointment