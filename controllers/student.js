const Student = require("../models/student");

exports.getStudents = (req, res) => {
  Student.find()
    .sort("name")
    .then((students) => {
      res.send(students);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.findStudentById = (req, res) => {
  const id = req.params.id;
  Student.findById(id)
    .then((student) => {
      res.send(student);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.createStudent = (req, res) => {
  const data = req.body;
  new Student(data)
    .save()
    .then((student) => {
      res.send(student);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.updateStudent = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  Student.findByIdAndUpdate(id, data)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.deleteStudent = (req, res) => {
  const id = req.params.id;
  Student.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
