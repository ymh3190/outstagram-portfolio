import express from "express";
import { getChannel } from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.channel, getChannel);
userRouter.get(routes.saved);
userRouter.get(routes.tagged);

export default userRouter;
