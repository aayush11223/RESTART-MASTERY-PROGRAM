import express from "express"
import connectDB from "./db.js";
import taskRoutes from "./routes/taskRoutes.js"

const app = express();
const PORT = 5000;

const handleMiddleware = (req, res, next) => {
    console.log("Middleware is working");
    next();
}

//middleware
app.use(express.json());
app.use(handleMiddleware);
app.use(taskRoutes);

app.get('/', (req, res) => {
    res.send("Hello world");
}
);

//params
app.get('/users/:id', (req, res) => {
    console.log(req.params);
    res.send("User received")
});

//query
app.get('/search', (req, res) => {
    console.log(req.query);
    res.send(`Receive query is ${req.query.term}`);
}
);

//database function
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});