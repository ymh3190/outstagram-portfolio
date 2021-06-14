import express from "express";
import { searchUser } from "../controllers/userController";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.post(routes.searchUser, searchUser);

export default apiRouter;
