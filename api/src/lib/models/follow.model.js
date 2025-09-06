const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "A user is required",
    },
    travel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Travel",
      required: "A travel is required"
    }
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

const Follow = mongoose.model("Follow", schema);

module.exports = Follow;
