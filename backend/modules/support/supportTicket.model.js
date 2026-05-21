import mongoose from "mongoose";

const supportTicketSchema =
    new mongoose.Schema({

        tripId: {
            type:
                mongoose.Schema.Types.ObjectId,
            ref: "Trip",
            required: true
        },

        createdBy: {
            type:
                mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        issueType: {
            type: String,

            enum: [
                "PAYMENT",
                "REFUND",
                "TRIP_PLANNING",
                "OTHER"
            ],

            required: true
        },

        message: {
            type: String,
            required: true,
            trim: true
        },

        status: {
            type: String,

            enum: [
                "OPEN",
                "IN_PROGRESS",
                "RESOLVED"
            ],

            default: "OPEN"
        }
    },
    {
        timestamps: true
    }
);

export const SupportTicket =
    mongoose.model(
        "SupportTicket",
        supportTicketSchema
    );