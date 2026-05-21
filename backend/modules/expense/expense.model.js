import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    tripId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
      required: true
    },

    payerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    amount: {
      type: Number,
      required: true
    },

    currency: {
      type: String,
      required: true
    },

    convertedAmount: {
      type: Number,
      required: true
    },

    category: {
      type: String,
      enum: [
        "food",
        "hotel",
        "transport",
        "shopping",
        "activities",
        "other"
      ],
      default: "other"
    },

    description: {
      type: String
    },

    splitType: {
      type: String,
      enum: ["equal", "unequal", "percentage"],
      required: true
    },

    expenseDate: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

export const Expense = mongoose.model("Expense", expenseSchema);