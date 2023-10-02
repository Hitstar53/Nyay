import React from 'react'
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

const PersonalInfo = (props) => {
  const date = new Date(props.info.personalInfo.dob);
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); 
  const year = date.getUTCFullYear().toString();
  const formattedDate = `${day}-${month}-${year}`;
    return (
      <div>
        <div className={styles.profileHeader}>
          <Avatar
            alt={props.info.fullName}
            sx={{
              height: "8.5rem",
              width: "8.5rem",
              mr: 2,
            }}
          />
          <div className={styles.profileInfo}>
            <h1 className="text-5xl font-bold">
              {props.info.fullName}
            </h1>
            <h3 className="text-lg flex items-center gap-2 font-semibold">
              <i class="fa-solid fa-id-card"></i>
              License: {props.info.licenseInfo.licenseNumber}
            </h3>
            <p className="text-sm">
            {props.info.bio}
            </p>
          </div>
        </div>
        <div className={styles.contact}>
          <span className={styles.pills}>
            <CallIcon /> {props.info.phone}
          </span>
          <span className={styles.pills}>
            <AlternateEmailIcon /> {props.info.email}
          </span>
          <span className={styles.pills}>
            <LinkedInIcon /> {props.info.linkedin}
          </span>
          <span className={styles.pills}>
            <LanguageIcon /> {props.info.website}
          </span>
        </div>
        <h2 className={styles.heading}>Personal Information</h2>
        <div className={styles.infoContainer}>
          <div>
            <span className={styles.label}>
              <MaleSharpIcon /> 
              <p>Gender</p>
            </span>
            <div>{props.info.personalInfo.gender}</div>
          </div>
          <div>
            <span className={styles.label}>
              <CalendarMonthIcon />
              <p>Date of Birth</p>
            </span>
            <div>{formattedDate}</div>
          </div>
          <div>
            <span className={styles.label}>
              <LocationOnIcon />
              <p>Location</p>
            </span>
            <div>{props.info.personalInfo.city},{props.info.personalInfo.state}</div>
          </div>
          <div>
            <span className={styles.label}>
              <AlternateEmailIcon />
              <p>Email</p>
            </span>
            <div>{props.info.personalInfo.officeEmail}</div>
          </div>
          <div>
            <span className={styles.label}>
              <CallIcon />
              <p>Phone Number</p>
            </span>
            <div>{props.info.personalInfo.officePhone}</div>
          </div>
          <div>
            <span className={styles.label}>
              <BusinessIcon />
              <p>Office Address</p>
            </span>
            <div>{props.info.personalInfo.officeAdd}</div>
          </div>
        </div>
      </div>
    );
}

export default PersonalInfo
