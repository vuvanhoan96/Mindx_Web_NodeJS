import express from "express"
import router from "./routes/index.js";

const PORT = 8000;
const app = express();

app.use(express.json()); // middlewares

/*
    Đây là 3 cách truyền dữ liệu của người dùng gửi tới Server nhận được: 

        req.params
        req.query
        req.body



// req.params

app.get('/products/:id', (req, res) => {

    res.send(`
        <h1>Hi everyone</h1>
        <p>Day la method ${req.method} tai url: ${req.url}</p>
        <p>Day la san pham co id: ${req.params.id}</p>
    `)
})

// req.body

app.post("/auth/signin", (req, res) => {

    console.log(req.body);
})

// req.query

app.get("/products", (req, res) => {
    console.log(req.query);
});

*/

app.use("/api", router);

app.listen(PORT, () => {
    console.log("Server is running at PORT: 8000");
})