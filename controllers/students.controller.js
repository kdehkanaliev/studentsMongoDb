import studentsModel from "../models/students.model.js";

let getAllStudents = async (req, res, next) => {
  let data = await studentsModel.find();
  if (data.find((val) => val.name == "Ali")) {
    data = data.find((val) => val.name == req.query.name).age = 21;
  }
  res.json({
    status: "succes",
    message: "studentlar muvaffaqiyatli olindi",
    data: data,
  });
};

let createStudent = async (req, res, next) => {
  let { name, age, grade } = req.body;
  let data = new studentsModel({ name, age, grade });
  await data.save();
  res.json({
    status: "succes",
    message: "student muvaffaqiyatli yuklandi",
    data: data,
  });
};

let filterByGrade = async (req, res, next) => {
  let filter = +req.params.filter;
  let data = await studentsModel.find();
  console.log(data.filter((val) => val <= filter));
  res.json({
    status: "succes",
    message: "student muvaffaqiyatli filterlandi",
    data: data.filter((val) => val.grade >= filter),
  });
};

export { getAllStudents, createStudent, filterByGrade };
