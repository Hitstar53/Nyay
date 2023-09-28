import React from 'react'
import PersonalInfo from './PersonalInfo'
import LicenseInfo from './LicenseInfo'
import EducationInfo from './EducationInfo'
import SkillSet from './SkillSet'

const Profile = () => {
  return (
    <div>
      <PersonalInfo />
      <LicenseInfo />
      <EducationInfo />
      <h2>Practice Areas</h2>
      <SkillSet />
      <h2>Specializations</h2>
      <SkillSet />
    </div>
  )
}

export default Profile
