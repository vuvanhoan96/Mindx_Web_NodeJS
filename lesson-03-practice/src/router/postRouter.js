import { Router } from "express";
import { posts } from '../../data/posts.js';

const postRouter = Router();

postRouter.get("/", (req, res) => {
    res.json({
        data: posts
    })
})

export default postRouter;