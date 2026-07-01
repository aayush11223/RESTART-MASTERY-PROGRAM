import express from "express";
import Task from "../models/task.js";

const router = express.Router();

//add a task
router.post("/tasks", async (req, res) => {
    try {
        const { title } = req.body;

        const task = await Task.create({
            title
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

//get all task
router.get("/tasks", async (req, res) => {
    try {
        const task = await Task.find();

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
});

//get tasks by id
router.get("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

//updateById
router.put("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id,
            req.body,
            { new: true }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

//deleteById
router.delete("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

});

export default router;