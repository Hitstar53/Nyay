import React from 'react'
import dayjs from "dayjs";
import styles from "./PastCase.module.css";

const data = {
  title: "Illegal Land Occupation",
  client: "Rosie Fletcher",
  desc: "throw happened torn hat sugar planning engineer factor within system managed hurt trouble please four range duty realize feet protection either properly east signal. depend bowl pressure strike mine opportunity cat exercise call construction table cave found shelf statement usual impossible wind writing foot sit chapter spin asleep",
  lastHearing: "5/5/2023",
  nextHearing: "10/16/2024",
};

const PastCase = () => {
  return (
    <div className={styles.caseCard}>
      <div className={styles.cardHeader}>
        <h1>{data.title}</h1>
      </div>
      <div className={styles.cardHearing}>
        Last Hearing:
        <div className={styles.cardDates}>
          <p>{dayjs(data.lastHearing).format("DD/MM/YYYY")}</p>
        </div>
      </div>
      <p className={styles.carddesc}>{data.desc}</p>
      <div className={styles.cardName}>
        <p>Client: {data.client}</p>
      </div>
    </div>
  );
}

export default PastCase