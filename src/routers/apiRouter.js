import express from "express";
import { searchUser } from "../controllers/userController";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.route(routes.searchUser).post(searchUser);

export default apiRouter;
