import express from "express";
import { getCreatePost, postCreatePost } from "../controllers/postController";
import { uploadFile } from "../middlewares";
import routes from "../routes";

const createRouter = express.Router();

createRouter.get(routes.createPost, getCreatePost);
createRouter.post(routes.createPost, uploadFile, postCreatePost);

export default createRouter;
