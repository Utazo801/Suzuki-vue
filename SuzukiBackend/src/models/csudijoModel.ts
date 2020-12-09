import mongoose from "mongoose";

const csudijoSchemaOptions: mongoose.SchemaOptions = {
  collection: "CarCollection",
  versionKey: false
};

export const csudijoSchema = new mongoose.Schema(
  {
    carName: {
      default: "Kicsi kocsi Suzuki",
      required: "Kérem adjon meg egy auto nevet!",
      type: String,
      unique: true
    },
    numberOfVote: {
      default: 0,
      min: 0,
      type: Number,
      get: (v: number) => Math.round(v),
      set: (v: number) => Math.round(v)
    },
    createdDate: {
      default: Date.now,
      type: Date
    }
  },
  csudijoSchemaOptions
);
