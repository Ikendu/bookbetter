import { Schema, model } from "mongoose";

const placeSchema = Schema({
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

module.exports = placeModel;
