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

const JWT_SECRET =
  "sdnn88^%$fwufnwiwmifnA8NUSNFn82828idwjndwindiwndBYGvyV781ybYGBbniNIN!!@#$HG%%45181818";

const mongourl =
  "mongodb+srv://khoshtariagiorgi1:restaurant-12345@cluster0.karxje0.mongodb.net/restaurant";

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
  const { email, password } = req.body;

  try {
    const existingUser = await user.findOne({ email });
    console.log("Existing User:", existingUser);

    if (!existingUser) {
      return res.json({ status: "error", error: "User Not Found" });
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    console.log("Password Match:", passwordMatch);

    if (passwordMatch) {
      const token = jwt.sign({}, JWT_SECRET);
      console.log("Login Successful. Sending token:", token);
      res.json({
        status: "ok",
        data: token,
        id: existingUser.id,
        email: existingUser.email,
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
  const { email } = req.body;

  try {
    const userModel = await user.findOne({ email });

    if (!userModel) {
      return res.json({ status: "error", error: "User Not Found" });
    }
    const secret = JWT_SECRET + userModel.password;
    const token = jwt.sign({ userId: userModel._id, email: userModel.email }, secret, {
      expiresIn: "10m",
    });

    res.json({ status: "ok", token });
  } catch (error) {
    console.error(error);
    res.json({ status: "error", error: "Internal server error" });
  }
});

app.get("/reset-password/:id", async (req, res) => {
  const { token, id } = req.params;

  console.log(req.params);
  const oldUser = await user.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User NOt Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.send("verify");
  } catch (error) {
    console.log(error);
    res.send("Not verify");
  }
});
app.post("/reset-password/:id", async (req, res) => {
  const { token, id } = req.params;
  const { newPassword } = req.body;
  // console.log(newPassword);

  const oldUser = await user.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User NOt Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const NewPassword = await bcrypt.hash(newPassword, 10);
    await user.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: NewPassword,
        },
      }
    );

    res.json({ status: "Password Updated" });
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

// app.get("/get-profile-data", async (req, res) => {
//   try {
//     // Fetch user profile data from the database
//     const userProfile = await user.findById(userId, "-password -resetToken -resetTokenExpiration");

//     res.json(userProfile);
//   } catch (error) {
//     console.error("Error fetching profile data:", error);
//     res.status(500).json({ status: "error", error: "Internal server error" });
//   }
// });

// app.post("/update-profile", async (req, res) => {
//   try {
//     // Extract user ID from the token (you may need to adjust this based on your token structure)
//     const userId = req.user.userId;

//     // Update user profile data in the database
//     await user.findByIdAndUpdate(userId, req.body);

//     res.json({ status: "ok", message: "Profile updated successfully" });
//   } catch (error) {
//     console.error("Error updating profile:", error);
//     res.status(500).json({ status: "error", error: "Internal server error" });
//   }
// });

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
