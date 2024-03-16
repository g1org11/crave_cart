// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const path = require("path");

// app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
// Increase max header size
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));
app.use(express.raw({ limit: "1mb" }));

const fs = require("fs");
const multer = require("multer");

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
require("./itemsDetails.cjs");

const user = mongoose.model("registration");
const Item = mongoose.model("Items");

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
app.post("/checkUserExistence", async (req, res) => {
  try {
    const { email, phone } = req.body;

    // Query the database to check if a user with the provided email or phone exists
    const existingUser = await user.findOne({ $or: [{ email }, { phone }] });

    if (existingUser) {
      // If a user with the provided email or phone exists, return true
      res.json({ exists: true });
    } else {
      // If no user found, return false
      res.json({ exists: false });
    }
  } catch (error) {
    console.error("Error checking user existence:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Inside /Login-user endpoint
app.post("/Login-user", async (req, res) => {
  console.log("Received login request:", req.body);
  const { email, password, phone, isAdmin } = req.body;

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
        isAdmin: existingUser.isAdmin,
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

// Apply middleware to /get-profile-data endpoint
app.get("/get-profile-data/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Check if Authorization header exists
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ status: "error", message: "Authorization token is missing" });
    }

    // Verify the JWT token
    jwt.verify(token.split(" ")[1], JWT_SECRET, async (err, decoded) => {
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
// Multer configuration
//

// Route to update user profile data
// Route to update user profile data
// Inside /update-profile/:userId endpoint
// Route to update user profile data

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    const fileName =
      file.originalname.replace(ext, "").toLowerCase().split(" ").join("-") +
      "-" +
      Date.now() +
      ext;
    cb(null, fileName);
  },
});
const upload = multer({ storage: storage });
app.post("/update-profile/:userId", upload.single("profileImage"), async (req, res) => {
  try {
    const userId = req.params.userId;

    let userProfile = await user.findById(userId);
    if (!userProfile) {
      return res.status(404).json({ status: "error", message: "User profile not found" });
    }

    userProfile.set(req.body);

    if (req.file) {
      userProfile.profileImage = req.file.buffer;
    }

    await userProfile.save();
    console.log(req.file);
    res.json({ status: "ok", message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ status: "error", error: "Internal server error" });
  }
});

/////////////////////////////////////////////////////
const storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    const fileName =
      file.originalname.replace(ext, "").toLowerCase().split(" ").join("-") +
      "-" +
      Date.now() +
      ext;
    cb(null, fileName);
  },
});

const upload1 = multer({ storage: storage1 });

// Route for adding items with images
app.post(
  "/add-item",
  upload1.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "secondaryImage", maxCount: 1 },
    { name: "tertiaryImage", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // Extract form data
      const { name, price, ingredients, descriptions } = req.body;

      // Extract uploaded files
      const mainImage = req.files["mainImage"][0].filename;
      const secondaryImage = req.files["secondaryImage"][0].filename;
      const tertiaryImage = req.files["tertiaryImage"][0].filename;

      // Create new item document
      const newItem = await Item.create({
        name: name,
        price: price,
        ingredients: ingredients,
        descriptions: descriptions,
        mainImage: mainImage,
        secondaryImage: secondaryImage,
        tertiaryImage: tertiaryImage,
      });

      // Respond with success message
      res.status(201).json({ message: "Item added successfully", newItem });
    } catch (error) {
      // Handle errors
      console.error("Error adding item:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);
///////////////////////////
app.get("/get-items", async (req, res) => {
  try {
    // Fetch items from your database (MongoDB)
    const items = await Item.find();
    res.json(items); // Send items as a JSON response
    console.log(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/////////////////////////////////////////
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

//////////////////////
