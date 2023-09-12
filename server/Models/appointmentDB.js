import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema(
    {
        clientName: {
            type: String,
            required: true
        },
        clientEmail: {
            type: String,
            required: true
        },
        clientPhone: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        lawyerName: {
            type: String,
            required: true
        },
        aptDate: {
            type: Date,
            // required: true
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