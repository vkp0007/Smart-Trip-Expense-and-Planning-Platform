import mongoose from "mongoose"

const participantSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    role: {
      type: String,
      enum: ["owner", "member"],
      default: "member"
    },

    joinedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    _id: false
  }
);

const tripSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String
    },

    destination: {
      type: String,
      required: true
    },

    startDate: {
      type: Date,
      required: true
    },

    endDate: {
      type: Date,
      required: true
    },

    baseCurrency: {
      type: String,
      default: "INR"
    },

    totalBudget: {    
      type: Number,
      required: true
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    participants: [participantSchema],

    status: {
      type: String,
      enum: ["planned", "completed"],
      default: "planned"
    }
  },
  {
    timestamps: true
  }
);

export const Trip = mongoose.model("Trip", tripSchema);