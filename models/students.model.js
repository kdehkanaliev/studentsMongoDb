import mongoose, { Schema } from "mongoose";
import { type } from "node:os";

let studentsSchema = new Schema({
  name: { type: String, minLength: 3, required: true },
  age: { type: Number, required: true },
  grade: { type: Number, required: true },
});

let studentsModel = mongoose.model("student", studentsSchema);

export default studentsModel;
