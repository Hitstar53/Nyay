import React from 'react'
import PersonalInfo from './PersonalInfo'
import LicenseInfo from './LicenseInfo'
import EducationInfo from './EducationInfo'
import SkillSet from './SkillSet'
import styles from './Profile.module.css'
import NotableCases from './NotableCases'
import Publications from './Publications'
import Awards from './Awards'

const Profile = () => {
  return (
    <div className={styles.profilePage}>
      <PersonalInfo />
      <SkillSet />
      <LicenseInfo />
      <EducationInfo />
      <NotableCases />
      <Publications />
      <Awards />
    </div>
  )
}

export default Profile
