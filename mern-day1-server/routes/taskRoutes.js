import express from "express";
import {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById
} from "../controller/taskController.js";

const router = express.Router();

//add a task
router.post("/tasks", createTask);

//get all task
router.get("/tasks", getAllTasks);

//get tasks by id
router.get("/tasks/:id", getTaskById);

//updateById
router.put("/tasks/:id", updateTaskById);

//deleteById
router.delete("/tasks/:id", deleteTaskById);

export default router;