import express from "express";
import { getCreatePost, postCreatePost } from "../controllers/postController";
import { uploadPost } from "../middlewares";
import routes from "../routes";

const createRouter = express.Router();

createRouter
  .route(routes.createPost)
  .get(getCreatePost)
  .post(uploadPost, postCreatePost);

export default createRouter;
