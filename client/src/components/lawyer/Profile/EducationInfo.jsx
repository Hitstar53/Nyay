import React, { useState } from "react";
import { Form, useActionData, json, redirect, useNavigation, useNavigate, useSubmit } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers/DateField";
import CustAlert from "../../UI/CustAlert";
// import ServerUrl from "../../constants";
import styles from "./EducationInfo.module.css";

const PersonalInfo = (props) => {
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
        navigate(0);
    };

    const [edit, setEdit] = useState(false);

    const [personalInfo, setPersonalInfo] = useState(
        props.info ? props.info : {}
    );

    const handleClickEdit = () => {
        if (!edit) {
            setEdit(true);
        } else {
            setEdit(false);
        }
    };

    const handleDateChange = (event) => {
        setPersonalInfo({
            ...personalInfo,
            dob: dayjs(event).format("YYYY/MM/DD"),
        });
    };

    const handleChange = (e) => {
        setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatePersonalInfo = async () => {
            const response = await fetch(
                `${ServerUrl}/api/student/personal`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: JSON.parse(localStorage.getItem("userinfo")).email,
                        phone: personalInfo.phone,
                        address: personalInfo.address,
                        dob: personalInfo.dob,
                        gender: personalInfo.gender,
                        blood: personalInfo.blood,
                        religion: personalInfo.religion,
                        linkedin: personalInfo.linkedin,
                        github: personalInfo.github
                    }),
                }
            );
            if (!response.ok) {
                setOpen(true);
                setSeverity("error");
                setMessage("Something went wrong, please try again later");
            }
            if (response.ok) {
                const data = await response.json();
                setOpen(true);
                setSeverity("success");
                setMessage("Personal Information Updated Successfully");
            }
        };
        updatePersonalInfo();
        setEdit(false);
    };

    return (
        <Box
            className={styles.personalInfo}
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "100%" },
                "& .MuiOutlinedInput-input": {
                    color: "var(--text-color) !important",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--dark-override-color) !important",
                },
                "& .MuiInputLabel-root": { color: "var(--text-color) !important" },
                "& .Mui-focused": { color: "var(--dark-override-color) !important" },
            }}
            noValidate
            onSubmit={handleSubmit}
            method="PUT"
            autoComplete="on"
        >
            <h3 className={styles.header}>
                Educational Information
                {!edit ? (
                    <EditIcon onClick={handleClickEdit} className={styles.titleIcon} />
                ) : (
                    <Fab
                        type="submit"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontWeight: "bold",
                            borderRadius: "10px",
                            backgroundColor: "var(--secondary-color)",
                            color: "var(--text-color)",
                            padding: "0.5rem 1rem",
                            ":hover": {
                                backgroundColor: "var(--secondary-color)",
                            },
                        }}
                        variant="extended"
                        size="small"
                        aria-label="add"
                    >
                        <SaveIcon />
                        Save
                    </Fab>
                )}
            </h3>
            <div className={styles.PersInfo}>
                <div className={styles.twoCol}>
                    {!edit && (
                        <span className={styles.iconInfo}>{personalInfo.phone}</span>
                    )}
                    {edit && (
                        <TextField
                            required
                            name="institute"
                            id="outlined-required"
                            label="Institute"
                            type="text"
                            onChange={handleChange}
                            defaultValue={personalInfo.phone}
                        />
                    )}
                </div>
                <div className={styles.twoCol}>
                    {!edit && (
                        <span className={styles.iconInfo}>{personalInfo.emailID}</span>
                    )}
                    {edit && (
                        <TextField
                            disabled
                            name="gradYear"
                            id="outlined-required"
                            label="Graduation Year"
                            type="text"
                            onChange={handleChange}
                            defaultValue={personalInfo.emailID}
                        />
                    )}
                </div>
            </div>
            <div className={styles.twoColAddress}>
                {!edit && (
                    <span className={styles.iconInfo}>{personalInfo.address}</span>
                )}
                {edit && (
                    <TextField
                        required
                        name="degree"
                        id="outlined-required"
                        label="Degree"
                        type="text"
                        onChange={handleChange}
                        defaultValue={personalInfo.address}
                    />
                )}
                {/* <div className={styles.twoCol}>
                    {!edit && (
                        <span className={styles.iconInfo}>{personalInfo.dob}
                        </span>
                    )}
                    {edit && (
                        <TextField 
                            required
                            name="yearsOfExperience"
                            id="outlined-required"
                            label="Years of Experience"
                            type="text"
                            onChange={handleDateChange}
                            defaultValue={personalInfo.address}
                        />
                    )}
                </div> */}
            </div>
            <CustAlert
                open={open}
                onClose={handleClose}
                severity={severity}
                message={message}
            />
        </Box>
    );
};

export default PersonalInfo;