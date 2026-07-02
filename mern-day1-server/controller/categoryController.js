import Category from "../models/category.js";

//Add a task
export const createCategories = async (req, res, next) => {
    try {
        const { name } = req.body;

        const category = await Category.create({ name });

        res.status(201).json(category);

    } catch (error) {
        next(error);
    }
};

//Get assl tasks
export const getAllCategories = async (req, res, next) => {
    try {
        const categories = await Category.find();

        res.status(200).json(categories);

    } catch (error) {
        next(error);
    }
};