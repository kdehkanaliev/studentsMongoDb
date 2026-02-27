import { Router } from "express";
import {
  createStudent,
  filterByGrade,
  getAllStudents,
} from "../controllers/students.controller.js";

let router = new Router();

router.get("/", getAllStudents);

router.post("/", createStudent);

router.get("/:filter", filterByGrade);

export default router;
