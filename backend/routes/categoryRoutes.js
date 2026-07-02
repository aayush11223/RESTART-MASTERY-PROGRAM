import express from "express";
import {
    createCategories,
    getAllCategories
} from "../controller/categoryController.js";

const router = express.Router();

//Create a category
router.post("/categories", createCategories);

//Get all category
router.get("/categories", getAllCategories);

export default router;