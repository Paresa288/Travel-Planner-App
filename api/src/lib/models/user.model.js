const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config");
require("./travel.model");

const EMAIL_PATTERN = 
  /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}|(?:\[(?:(?:IPv6:[a-fA-F0-9:.]+)|(?:\d{1,3}\.){3}\d{1,3})\]))$/;

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "An username is required"],
      unique: true,
      trim: true,
      lowercase: true,
      minlength: [3, "The username should have at least 3 characters"],
      maxlength: [20, "The username should not have more than 20 characters"],
      match: [
        /^[a-zA-Z0-9._-]+$/,
        "Username should only contain letters, numbers, stop marks, hyphens and underscores",
      ],
    },
    email: {
      type: String,
      required: [true, "An email is required"],
      lowercase: true,
      trim: true,
      match: [EMAIL_PATTERN, "The email is not valid"],
    },
    password: {
      type: String,
      required: [true, "A password is required"],
      minlength: [6, "The password should have at least 6 characters"],
      maxlength: [128, "The password should not have more than 128 characters"],
    },
    birthDate: {
      type: Date,
      required: [true, "A birth date is required"],
      validate: {
        validator: function (date) {
          const today = new Date();
          const minAge = new Date(
            today.getFullYear() - 100,
            today.getMonth(),
            today.getDate()
          );
          const maxAge = new Date(
            today.getFullYear() - 13,
            today.getMonth(),
            today.getDate()
          );
          return date >= minAge && date <= maxAge;
        },
        message:
          "The birth date should be for someone between 13 and 100 years old",
      },
    },
    avatar: {
      type: String,
      default: `https://i.pravatar.cc/50`,
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret.password;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

schema.virtual("travels", {
  ref: "Travel",
  localField:"_id",
  foreignField: "user",
});

schema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    bcrypt
      .hash(user.password, config.get("saltWork"))
      .then((hash) => {
        user.password = hash;
        next();
      })
      .catch((err) => next(err));
  } else {
    next();
  }
});

schema.methods.checkPassword = function (passwordToCheck) {
  return bcrypt.compare(passwordToCheck, this.password);
};

const User = mongoose.model("User", schema);

module.exports = User;
