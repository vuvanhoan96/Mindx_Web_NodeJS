import express from 'express'

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
    res.send("Hello to our ");
});

app.listen(PORT, () => {
    console.log(`Sever is running at PORT ${PORT}`);
});