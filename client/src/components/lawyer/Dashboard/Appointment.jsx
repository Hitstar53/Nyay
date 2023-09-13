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
      <Avatar
        alt={data.sender}
        src={data.senderPhoto}
        sx={{
          width: "7rem",
          height: "7rem",
          marginRight: "2rem",
          alignSelf: "center",
        }}
        className={styles.avatar}
      />
      <div className={styles.cardHeader}>
        <h1>{data.sender}</h1>
      </div>
      <div className={styles.cardSubHeader}>
        <p>{data.issue}</p>
        <div className={styles.carddate}>
          <CalendarTodayRoundedIcon sx={{ fontSize: "1.5rem" }} />
          {dayjs(data.date).format("DD MMMM, YYYY")}
        </div>
      </div>
      <div className={styles.cardBtn}>
        <button className={styles.accept}>Accept</button>
        <button className={styles.reject}>Reject</button>
      </div>
    </div>
  );
}

export default Appointment