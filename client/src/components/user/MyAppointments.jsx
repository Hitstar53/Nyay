import React from 'react'
import { useLoaderData, json } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ActiveCase from '../lawyer/Dashboard/ActiveCase';
import styles from "./MyAptmnts.module.css";

const MyAppointments = () => {
    const dashboard = styles.dashboard + " flex flex-col gap-8 p-8";

    return (
      <div className={dashboard}>
        <h1 className="text-xl sm:text-2xl font-bold">My Appointments</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 bg-white p-4 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <ActiveCase />
            <ActiveCase />
            <ActiveCase />
          </div>
        </div>
      </div>
    );
}

export default MyAppointments