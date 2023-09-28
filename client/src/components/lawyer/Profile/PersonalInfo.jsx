import React from 'react'
import styles from './PersonalInfo.module.css'
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MaleSharpIcon from '@mui/icons-material/MaleSharp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';

const PersonalInfo = () => {
    return (
        <div>
            <div className={styles.profileHeader}>
                <span className={styles.profileImg}></span>
                <div className={styles.profileInfo}>
                    <h1 className={styles.profileName}>Sushant Sharma</h1>
                    <h3 className={styles.licenseNo}>License Number: 3263BXBI2U3EY2</h3>
                    <p className={styles.profileBio}>IIM Kozhikode (Bo'23) | Dean's Merit List (Top 5%ile) | Accenture
                        Strategy Intern | Ex-ZS | Gold Medalist B.Tech CSE |Sr. Member -
                        IIMK PR Cell, Abakus, Women in Mgmt | ShARE</p>
                </div>
            </div>
            <div className={styles.contact}>
                <span className={styles.pills}> <CallIcon /> 98677 43780</span>
                <span className={styles.pills}> <AlternateEmailIcon /> sushantk7@gmail.com</span>
                <span className={styles.pills}> <LinkedInIcon /> sushantk7.linkedin.com</span>
                <span className={styles.pills}> <LanguageIcon /> advsushant.com</span>
            </div>
            <h2 className={styles.heading}>Personal Information</h2>
            <div className={styles.infoContainer}>
                <div>
                    <span className={styles.label}><MaleSharpIcon/>  Gender</span>
                    <div>Male</div>
                </div>
                <div>
                    <span className={styles.label}><CalendarMonthIcon/>  Date of Birth</span>
                    <div>05/05/1973</div>
                </div>
                <div>
                    <span className={styles.label}><LocationOnIcon/> Location</span>
                    <div>Mumbai, Maharashtra</div>
                </div>
                <div>
                    <span className={styles.label}><AlternateEmailIcon/> Office Mail</span>
                    <div>sushant99@lawyer.com</div>
                </div>
                <div> 
                    <span className={styles.label}><CallIcon/>   Office Number</span>
                    <div>+022 6788 4350</div>
                </div>
                <div>
                    <span className={styles.label}><BusinessIcon/>   Office Address</span>
                    <div>111/Bhoomi Heights, Near Zoom Plaza, Andheri(W)</div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo
