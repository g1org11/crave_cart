const mongoose = require("mongoose");

const ItemsDetailsSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    ingredients: String,
    descriptions: String,
    mainImage: {
      type: Buffer,
    },
    secondaryImage: {
      type: Buffer,
    },
    tertiaryImage: {
      type: Buffer,
    },
  },
  {
    collection: "items",
  }
);

mongoose.model("Items", ItemsDetailsSchema); // Registering the schema with the model name "Items"
