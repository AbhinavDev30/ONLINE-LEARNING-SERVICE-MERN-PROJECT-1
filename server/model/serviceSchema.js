import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  detailDesctiption: {
    type: String,
    required: true,
  },

  skills: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  provider: {
    type: String,
    required: true,
  },
});

const Services = new model("Service", serviceSchema);
export default Services;
