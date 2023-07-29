import express from 'express';
import authRouter from './router/authRouter.js';
import postRouter from './router/postRouter.js';

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello")
})

app.use("/api/v1/posts", postRouter);
app.use("/auth", authRouter);

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server is running on ${PORT}`);
    }
})