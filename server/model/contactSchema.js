import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

//Create model

const Contact = model("Contact", contactSchema);
export default Contact;
