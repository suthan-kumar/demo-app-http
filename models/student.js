const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 3,
      required: true,
    },
    age: {
      type: Number,
      default: 18,
      min: 1,
      max: 100,
    },
    password: {
      type: String,
      required: true,
      default: "abcd1234",
      select : false
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
