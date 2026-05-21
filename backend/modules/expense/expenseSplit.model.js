import mongoose from "mongoose";

const expenseSplitSchema = new mongoose.Schema(
  {
    expenseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Expense",
      required: true
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    amountOwed: {
      type: Number,
      required: true
    },

    percentage: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

export const ExpenseSplit = mongoose.model("ExpenseSplit", expenseSplitSchema);