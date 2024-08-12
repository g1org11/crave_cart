// userDetails.js

const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    // userId: String,
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
    // resetToken: String,
    // resetTokenExpiration: Date,

    // New profile fields
    fullName: String,
    professionalTitle: String,
    age: Number,
    about: String,
    contactNumber: String,
    country: String,
    postcode: Number,
    city: String,
    fullAddress: String,
    profileImage: {
      type: Buffer,
    },
  },
  {
    collection: "registration",
  }
);

mongoose.model("registration", UserDetailsSchema);
