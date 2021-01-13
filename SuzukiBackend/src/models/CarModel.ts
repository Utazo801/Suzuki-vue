import mongoose from "mongoose";

const CarSchemaOptions: mongoose.SchemaOptions = {
  collection: "CarCollection",
  versionKey: false
};

export const CarSchema = new mongoose.Schema(
  {
    CarName: {
      default: "Kicsi kocsi Suzuki",
      type: String,
      unique: true
    },
    Price: {
      default: 1000000,
      type: Number
    },
    AvailableColors: {
      default: "Red, Blue, Green",
      type: String
    },
    description: {
      default: "Jó autó",
      type: String
    },
    BHP: {
      default: 150,
      type: Number
    },
    Color: {
      default: "Rainbow",
      type: String
    }
  },
  CarSchemaOptions
);
