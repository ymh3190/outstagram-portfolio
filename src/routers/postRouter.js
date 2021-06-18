import express from "express";
import { deletePost, getLikeBy } from "../controllers/postController";
import routes from "../routes";

const postRouter = express.Router();

postRouter.get(routes.likeBy, getLikeBy);
postRouter.get(routes.deletePost, deletePost);

export default postRouter;
