import React from 'react'
import { useLoaderData, json } from "react-router-dom";
import ServerUrl from "../../../constants";
import PersonalInfo from './PersonalInfo'
import LicenseInfo from './LicenseInfo'
import EducationInfo from './EducationInfo'
import SkillSet from './SkillSet'
import styles from './Profile.module.css'
import NotableCases from './NotableCases'
import Publications from './Publications'
import Awards from './Awards'

const Profile = () => {
  const data = useLoaderData();
  return (
    <div className={styles.profilePage}>
      <PersonalInfo info={data.primaryData} />
      <SkillSet />
      <LicenseInfo info={data.primaryData.licenseInfo} />
      <EducationInfo info={data.primaryData.educationInfo}/>
      <NotableCases />
      <Publications />
      <Awards />
    </div>
  )
}

export default Profile

export async function loader({ params }) {
  const response1 = await fetch(
    `${ServerUrl}/lawyer/${params.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response1.ok) {
    throw json(
      { message: "Could not fetch profile information" },
      { status: 422 }
    );
  }
  if (response1.ok) {
    const primaryData = await response1.json();
    return { primaryData };
  }
}