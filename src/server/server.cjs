// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const session = require("express-session");

const JWT_SECRET =
  "sdnn88^%$fwufnwiwmifnA8NUSNFn82828idwjndwindiwndBYGvyV781ybYGBbniNIN!!@#$HG%%45181818";

const mongourl =
  "mongodb+srv://khoshtariagiorgi1:restaurant-12345@cluster0.karxje0.mongodb.net/restaurant";
app.use(
  session({
    secret: JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

require("./userDetails.cjs");

const user = mongoose.model("registration");

app.post("/SignUp", async (req, res) => {
  console.log("Received registration request:", req.body);
  const { email, password, phone, isAdmin } = req.body;

  const encryptedpassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await user.findOne({ email }).exec();
    if (oldUser) {
      return res.json({ error: "User Exists" });
    }

    await user.create({
      email,
      password: encryptedpassword, // Store the encrypted password
      phone,
      isAdmin,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

// Inside /Login-user endpoint
app.post("/Login-user", async (req, res) => {
  console.log("Received login request:", req.body);
  const { email, password, phone } = req.body;

  try {
    const existingUser = await user.findOne({ email });
    console.log("Existing User:", existingUser);
    if (!existingUser) {
      return res.json({ status: "error", error: "User Not Found" });
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    console.log("Password Match:", passwordMatch);

    if (passwordMatch) {
      const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET); // Include userId in the token
      console.log("Login Successful. Sending token:", token);
      // Store MongoDB ID in session
      req.session.userId = existingUser._id;
      // Also store user ID in the user document
      existingUser.userId = existingUser._id;
      console.log("userId from server", existingUser.userId);
      await existingUser.save();
      res.json({
        status: "ok",
        data: token,
        id: existingUser.userId,
        email: existingUser.email,
        phone: existingUser.phone,
      });
    } else {
      console.log("Invalid Password");
      res.json({ status: "error", error: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.json({ status: "error", error: "Internal server error" });
  }
});

app.post("/reset-password-request", async (req, res) => {
  const { email, newPassword } = req.body;
  console.log(email, newPassword);

  const userModel = await user.findOne({ email });

  if (!userModel) {
    return res.json({ status: "error", error: "User Not Found" });
  }

  const NewPassword = await bcrypt.hash(newPassword, 10);
  userModel.password = NewPassword;

  try {
    await userModel.save();
    res.json({ status: "Password Updated" });
  } catch (error) {
    res.json({ status: "Something Wrong" });
  }

  // res.json({ status: "ok" });
});

// const extractUserId = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (token) {
//     jwt.verify(token, JWT_SECRET, (err, decoded) => {
//       if (err) {
//         console.error("Failed to authenticate token:", err);
//         return res.status(401).json({ status: "error", message: "Unauthorized" });
//       }
//       req.user = decoded;
//       next();
//     });
//   } else {
//     return res.status(401).json({ status: "error", message: "Unauthorized" });
//   }
// };

// Apply middleware to /get-profile-data endpoint
app.get("/get-profile-data/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Check if user is authenticated
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
      if (err || decoded.userId !== userId) {
        return res.status(401).json({ status: "error", message: "Unauthorized" });
      }

      // Query the database using the user ID
      try {
        const userProfile = await user.findById(userId, "-password");
        if (!userProfile) {
          return res.status(404).json({ status: "error", message: "User profile not found" });
        }
        res.json(userProfile);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
      }
    });
  } catch (error) {
    console.error("Error fetching profile data:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});
// Route to update user profile data
// Inside server.js

// Route to update user profile data
app.post("/update-profile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedProfileData = req.body; // Assuming entire updated profile data is sent in the request body

    // Retrieve the existing user profile
    let userProfile = await user.findById(userId);
    if (!userProfile) {
      return res.status(404).json({ status: "error", message: "User profile not found" });
    }

    // Update the entire user profile object with the received data
    userProfile.set(updatedProfileData);

    // Save the updated user profile
    await userProfile.save();

    res.json({ status: "ok", message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ status: "error", error: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("server started");
});
mongoose
  .connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => console.log(e));
// app.post("/post", async (req, res) => {
//   console.log(req.body);
//   const { data } = req.body;

//   try {
//     if (data === "giorgi") {
//       res.send({ status: "ok" });
//     } else {
//       res.send({ status: "user not found" });
//     }
//   } catch (error) {
//     res.send({ status: "something went wrong, try again" });
//   }
// });
