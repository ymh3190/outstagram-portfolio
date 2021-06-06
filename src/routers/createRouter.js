import express from "express";
import { getCreatePost, postCreatePost } from "../controllers/postController";
import { uploadPost } from "../middlewares";
import routes from "../routes";

const createRouter = express.Router();

createRouter.get(routes.createPost, getCreatePost);
createRouter.post(routes.createPost, uploadPost, postCreatePost);

export default createRouter;
