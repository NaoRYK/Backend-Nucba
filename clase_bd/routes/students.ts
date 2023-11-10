import { Router } from "express";
import { createStudent, deleteStudent, getStudents, getStudentsByDNI, updateStudent } from "../controllers/students";

const router = Router();

router.get("/", getStudents)

router.post("/",createStudent)

router.get("/:dni",getStudentsByDNI)

router.put("/:dni",updateStudent)

router.patch("/:dni",updateStudent)

router.delete("/:dni", deleteStudent)
export default router;
