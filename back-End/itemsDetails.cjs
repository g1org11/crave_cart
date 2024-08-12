const mongoose = require("mongoose");

const ItemsDetailsSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    ingredients: String,
    descriptions: String,
    mainImage: String,
    secondaryImage: String,
    tertiaryImage: String,
    courseType: String,
  },
  {
    collection: "items",
  }
);

mongoose.model("Items", ItemsDetailsSchema);
