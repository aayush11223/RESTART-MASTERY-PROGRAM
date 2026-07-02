import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 20,
        enum: ["pending", "in-process", "done"]
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }

})

const Task = mongoose.model('Task', taskSchema);

export default Task;