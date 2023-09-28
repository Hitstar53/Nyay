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

const Appointment = () => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.col1}>
        <p>
          {dayjs(data.date).format("ddd")}
        </p>
        <p className='text-4xl'>
          {dayjs(data.date).format("DD")}
        </p>
        <p>
          {dayjs(data.date).format("MMM")}
        </p>
      </div>
      <div className={styles.col2}>
        <p className='text-xl'>
          {dayjs(data.date).format("hh:mm A")}
        </p>
        <p className='text-base font-normal'>
          60 mins
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
          <h1>{data.sender}</h1>
        </div>
        <p>{data.issue}</p>
      </div>
      <div className={styles.col4}>
        <button className={styles.accept}>Accept</button>
        <button className={styles.reject}>Reject</button>
      </div>
    </div>
  );
}

export default Appointment