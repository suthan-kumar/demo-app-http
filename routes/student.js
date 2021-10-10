const Router = require("express").Router();
const StudentController = require("../controllers/student");

// Get data
Router.route("/").get(StudentController.getStudents);

// Find Student By Id
Router.route("/:id").get(StudentController.findStudentById);

// Create
Router.route("/").post(StudentController.createStudent);

// Update
Router.route("/:id").put(StudentController.updateStudent);

// Delete
Router.route("/:id").delete(StudentController.deleteStudent);

module.exports = Router;
