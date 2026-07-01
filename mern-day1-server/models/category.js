import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
    title: {
        name: String,
        required: true,
    },


})

const Category = mongoose.model('Category', categorySchema);

export default Category;