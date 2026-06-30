import express from "express"

const app = express();
const PORT = 5000;

app.use(express.json());

const handleMiddleware = (req, res, next) => {
    console.log("Middleware is working");
    next();
}

app.use(handleMiddleware);

app.get('/', (req, res) => {
    res.send("Hello world");
}
);

app.get('/GET/users/:id', (req, res) => {
    console.log(req.params);
    res.send("User received")
});

app.get('/GET/search', (req, res) => {
    console.log(req.query);
    res.send(`Receive query is ${req.query.term}`);
}
);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});