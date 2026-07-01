import express from "express";
import Category from "../models/category.js";

const router = express.Router();

// Build `POST /categories` and `GET /categories` routes
router.post("/categories", async (req, res) => {
    try {
        const { name } = req.body;

        const category = await Category.create({ name });

        res.status(201).json(category);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.get("/categories", async (req, res) => {
    try {
        const categories = await Category.find();

        res.status(200).json(categories);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
export default router;