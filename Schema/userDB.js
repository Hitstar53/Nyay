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
        case: {
            caseTitle: {
                type: String,
                max: 50
            },
            caseDetails: {
                caseNumber: {
                    type: String,
                    max: 50
                },
                caseType: {
                    type: String,
                    max: 50
                },
                caseDescription: {
                    type: String,
                    max: 1000
                },
                caseFilingDate: {
                    type: Date,
                    required: true,
                },
                caseFilingCourt: {
                    type: String,
                    max: 50
                },
            },
            caseStatus: {
                type: String,
                max: 50
            },
            caseFiles: {
                type: Array,
                default: [],
            },
            caseJudge: {
                type: String,
                max: 50
            },
            caseLawyer: {
                type: String,
                max: 50
            },
            caseOpponent: {
                type: String,
                max: 50
            },
            caseOpponentLawyer: {
                type: String,
                max: 50
            },
            caseHearingDates: {
                type: Array,
                default: [],
            }
        },
        appointments: {
            date: {
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

module.exports = mongoose.model("User", UserSchema)