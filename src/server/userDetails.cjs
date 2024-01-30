// userDetails.js
const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    email: {
      type: String,

      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  {
    collection: "registration",
  }
);

mongoose.model("registration", UserDetailsSchema);
