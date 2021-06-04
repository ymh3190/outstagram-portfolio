import express from "express";
import { getLikeBy } from "../controllers/postController";
import routes from "../routes";

const postRouter = express.Router();

postRouter.get(routes.likeBy, getLikeBy);

export default postRouter;
