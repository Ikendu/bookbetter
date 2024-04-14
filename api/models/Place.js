import { Schema, model } from "mongoose";

const placeSchema = Schema({
  owner: { type: Schema.Types.ObjectId, ref: `User` },
  title: String,
  address: String,
  description: String,
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuest: Number,
  photos: [String],
  perks: [String],
});

const PlaceModel = model(`place`, placeSchema);

module.exports = PlaceModel;
