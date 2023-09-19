import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema(
    {
        clientName: {
            type: String,
        },
        lawyerName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        aptDate: {
            type: Date,
            required: true
        },
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        },
        client: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        lawyer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Lawyer",
        },
        status: {
            type: String,
            default: "Pending"
        },
    },
    {
        timestamps: true,
    },
    {
        collection: "appointments"
    }
);

export const Appointment = mongoose.model("Appointment", appointmentSchema);