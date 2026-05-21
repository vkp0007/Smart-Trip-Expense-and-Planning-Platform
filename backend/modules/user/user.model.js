import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6
    },

    preferredCurrency: {
      type: String,
      default: "INR"
    },

    loyalty: {

      score: {
        type: Number,
        default: 0
      },

      tier: {
        type: String,
        enum: [
          "Bronze",
          "Silver",
          "Gold"
        ],
        default: "Bronze"
      },

      totalTrips: {
        type: Number,
        default: 0
      },

      totalSpend: {
        type: Number,
        default: 0
      },

      successfulSettlements: {
        type: Number,
        default: 0
      }
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre("save",
  async function () {

    if (
      !this.isModified("password")
    ) {
      return;
    }

    this.password =
      await bcrypt.hash(this.password,10);
  }
);

userSchema.methods.matchPassword =
  async function (enteredPassword) {

    return await bcrypt.compare(
      enteredPassword,
      this.password
    );
  };

export const User =
  mongoose.model(
    "User",
    userSchema
  );