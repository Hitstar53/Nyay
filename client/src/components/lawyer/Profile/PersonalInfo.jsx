import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MaleSharpIcon from '@mui/icons-material/MaleSharp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import styles from './PersonalInfo.module.css'
import { Avatar } from '@mui/material';

const PersonalInfo = () => {
    return (
      <div>
        <div className={styles.profileHeader}>
          <Avatar
            alt="Sushant Sharma"
            sx={{
              height: "8.5rem",
              width: "8.5rem",
              mr: 2,
            }}
          />
          <div className={styles.profileInfo}>
            <h1 className="text-5xl font-bold">Sushant Sharma</h1>
            <h3 className="text-lg flex items-center gap-2 font-semibold">
              <i class="fa-solid fa-id-card"></i>
              License: 3263BXBI2U3EY2
            </h3>
            <p className="text-sm">
              IIM Kozhikode (Bo'23) | Dean's Merit List (Top 5%ile) | Accenture
              Strategy Intern | Ex-ZS | Gold Medalist B.Tech CSE |Sr. Member -
              IIMK PR Cell, Abakus, Women in Mgmt | ShARE
            </p>
          </div>
        </div>
        <div className={styles.contact}>
          <span className={styles.pills}>
            <CallIcon /> 98677 43780
          </span>
          <span className={styles.pills}>
            <AlternateEmailIcon /> sushantk7@gmail.com
          </span>
          <span className={styles.pills}>
            <LinkedInIcon /> sushantk7.linkedin.com
          </span>
          <span className={styles.pills}>
            <LanguageIcon /> advsushant.com
          </span>
        </div>
        <h2 className={styles.heading}>Personal Information</h2>
        <div className={styles.infoContainer}>
          <div>
            <span className={styles.label}>
              <MaleSharpIcon /> 
              <p>Gender</p>
            </span>
            <div>Male</div>
          </div>
          <div>
            <span className={styles.label}>
              <CalendarMonthIcon />
              <p>Date of Birth</p>
            </span>
            <div>05/05/1973</div>
          </div>
          <div>
            <span className={styles.label}>
              <LocationOnIcon />
              <p>Location</p>
            </span>
            <div>Mumbai, Maharashtra</div>
          </div>
          <div>
            <span className={styles.label}>
              <AlternateEmailIcon />
              <p>Email</p>
            </span>
            <div>sushant99@lawyer.com</div>
          </div>
          <div>
            <span className={styles.label}>
              <CallIcon />
              <p>Phone Number</p>
            </span>
            <div>+022 6788 4350</div>
          </div>
          <div>
            <span className={styles.label}>
              <BusinessIcon />
              <p>Office Address</p>
            </span>
            <div>111/Bhoomi Heights, Near Zoom Plaza, Andheri(W)</div>
          </div>
        </div>
      </div>
    );
}

export default PersonalInfo
