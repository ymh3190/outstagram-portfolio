import express from "express";
import { getCreatePost, postCreatePost } from "../controllers/postController";
import routes from "../routes";

const createRouter = express.Router();

createRouter.get(routes.createPost, getCreatePost);
createRouter.post(routes.createPost, postCreatePost);

export default createRouter;
