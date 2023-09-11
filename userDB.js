const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            min: 3,
            max: 30,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
            max: 10,
            unique: true,
        },
        gender: {
            type: String,
        },
        dob: {
            type: Date,
            required: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        profilePicture: {
            type: String,
            default: "",
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        city: {
            type: String,
            max: 50
        },
        state: {
            type: String,
            max: 50
        },
        languages: {
            type: Array,
            default: [],
        },
        rating: {
            type: Number,
            default: 0,
        },
        reviews: {
            type: Array,
            default: [],
        },
        accountType: {
            type: String,
            default: "user",
        },
        caseTitle: {
            type: String,
            max: 50
        },
        caseDetails: {
            type: String,
            max: 50
        },
        caseStatus: {
            type: String,
            max: 50
        },
        caseFiles: {
            type: Array,
            default: [],
        },
        appointment: {
            appointmentDate: {
                type: Date,
                required: true,
            },
            appointmentRequests: {
                type: Array,
                default: [],
            },  
        }
    },
    {
        timestamps : true
    },
);
42
module.exports = mongoose.model("User", UserSchema)