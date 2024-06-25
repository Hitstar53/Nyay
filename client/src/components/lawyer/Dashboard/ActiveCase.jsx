import React from 'react'
import dayjs from "dayjs";
import { Avatar } from "@mui/material";
import TimeIcon from "@mui/icons-material/AccessTime";
import styles from "./ActiveCase.module.css";

const data = {
  title: "Illegal Land Occupation",
  client: "Rosie Fletcher",
  desc: "throw happened torn hat sugar planning engineer factor within system managed hurt trouble please four range duty realize feet protection either properly east signal. depend bowl pressure strike mine opportunity cat exercise call construction table cave found shelf.",
  nextHearing: "10/16/2024",
}

const ActiveCase = () => {
  return (
    <div className={styles.caseCard}>
      <div className={styles.col1}>
        <Avatar
          alt={data.sender}
          src={data.senderPhoto}
          sx={{
            width: "4.5rem",
            height: "4.5rem",
          }}
        />
      </div>
      <div className={styles.col2}>
        <h1>{data.client}</h1>
        <p>{data.title}</p>
      </div>
      <p className={styles.col3}>{data.desc}</p>
      <div className={styles.col4}>
        <span className='text-sm font-light'>Next Hearing</span>
        <p className='flex gap-2 items-center'>
          <TimeIcon />
          {dayjs(data.nextHearing).format("DD/MM/YYYY")}
        </p>
      </div>
      <div className={styles.col5}>
        <button>View Case</button>
      </div>
    </div>
  );
}

export default ActiveCase