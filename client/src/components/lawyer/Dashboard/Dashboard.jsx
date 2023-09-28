import React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Appointreq from './Appointreq'
import ActiveCase from './ActiveCase'
import PastCase from './PastCase'
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    const dashboard = styles.dashboard + " flex flex-col gap-8 p-8";
    // const Theme = createTheme({
    //   palette: {
    //     mode: "dark",
    //   },
    // });
    return (
      <div className={dashboard}>
        <h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-4 w-3/4">
            <h1 className="text-base sm:text-lg sm:p-1 font-semibold heading">
              Appointment Requests
            </h1>
            <Appointreq />
          </div>
          <div className="flex flex-col gap-4 w-1/4">
            <h1 className="text-base sm:text-lg sm:p-1 font-semibold heading">
              Your Calendar
            </h1>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                        sx={{
                            height: "100%",
                            borderRadius: "10px",
                            backgroundColor: "#fff",
                            transform: "scaleY(1.175) scaleX(1.1) translateY(7.5%)",
                            boxShadow: "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)",
                        }}
                        displayWeekNumber
                        views={["year", "month", "day"]}
                    />
                </LocalizationProvider>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-base sm:text-lg sm:p-1 font-semibold heading">
            Your Active Cases
          </h1>
          <div className="flex flex-col gap-8">
            <ActiveCase />
            <ActiveCase />
            <ActiveCase />
          </div>
        </div>
      </div>
    );
}

export default Dashboard