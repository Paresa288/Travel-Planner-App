const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "A title is required",
      trim: true,
      minlength: [2, "The title should have at least 2 characters"],
      maxlength: [50, "The title should not have more than 50 characters"],
    },
    origin: {
      type: String,
      required: "Please select an origin",
      trim: true,
    },
    destinations: {
      type: [{ type: String, trim: true }],
      required: "Please select at least one destination",
      default: []
    },
    travelMethods: {
      type: [{ 
        type: String, 
        trim: true,
        enum: ["airplane", "train", "car", "bus", "bicycle", "by foot", "metro/subway", "boat", "motorcycle", "taxi"] 
      }],
      required: "Please select a travel method",
    },
    initialBudget: {
      type: Number,
      required: "Please set an initial budget"
    },
    finalBudget: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    startedAt: {
      type: Date,
    },
    finishedAt: {
      type: Date,
    },
    comments: {
      type: [{ type: String, default: "" }],
      default: []
    },
    days: {
      type: Number,
      required: "Please select how many days you want to travel for",
    },
    tasks: {
      type: [{ type: String, default: "" }],
      default: []
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "A user is required",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
      },
    },
  }
);

const Travel = mongoose.model("Travel", schema);

module.exports = Travel;
