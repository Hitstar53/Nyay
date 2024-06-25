import mongoose from "mongoose";

const trackerSchema = mongoose.Schema(
    {
        lawyerName: {
            type: String,
            required: true
        },
        lawyerEmail: {
            type: String,
            required: true
        },
        lawyerPhone: {
            type: String,
            required: true
        },
        update: {
            type: String,
            required: true
        },
        details: {
            type: String,
            // required: true
        },
        clientName: {
            type: String,
            required: true
        },
        updateDate: {
            type: Date,
            required: true
        },
    },
    {
        timestamps: true,
    },
    {
        collection: "caseTracker"
    }
);

export const Tracker = mongoose.model("Tracker", trackerSchema);