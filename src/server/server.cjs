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

app.post("/Login-user", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await user.findOne({ email }); // Use the 'user' model, not 'User'
    if (!existingUser) {
      return res.json({ error: "User Not Found" });
    }

    if (await bcrypt.compare(password, existingUser.password)) {
      const token = jwt.sign({}, JWT_SECRET);
      res.json({ status: "ok", data: token });
    } else {
      res.json({ status: "error", error: "Invalid password" });
    }
  } catch (error) {
    console.error(error);
    res.json({ status: "error", error: "Internal server error" });
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
