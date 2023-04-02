import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    c_name: String,
    email: String,
    mobileNumber: Number,
  },
  { timestamps: true }
);
export default mongoose.model("contacts", ContactSchema);
