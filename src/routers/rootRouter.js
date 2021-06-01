import express from "express";
import { explore, home, post } from "../controllers/postController";
import { user } from "../controllers/userController";
import routes from "../routes";

const rootRouter = express.Router();

rootRouter.get(routes.home, home);
rootRouter.get(routes.explore, explore);
rootRouter.get(routes.user(), user);
rootRouter.get(routes.post(), post);

export default rootRouter;
