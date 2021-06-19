import express from "express";
import { savePost } from "../controllers/postController";
import { searchUser } from "../controllers/userController";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.post(routes.searchUser, searchUser);
apiRouter.post(routes.savePost, savePost);

export default apiRouter;
