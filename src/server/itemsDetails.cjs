const mongoose = require("mongoose");

const ItemsDetailsSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    ingredients: String,
    descriptions: String,
    mainImage: {
      data: Buffer, // Store binary data
      contentType: String, // Store content type (e.g., image/jpeg, image/png)
    },
    secondaryImage: {
      data: Buffer,
      contentType: String,
    },
    tertiaryImage: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    collection: "items",
  }
);

mongoose.model("Items", ItemsDetailsSchema);
