import express from "express";
import { getChannel, getSaved, getTagged } from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.channel, getChannel);
userRouter.get(routes.saved, getSaved);
userRouter.get(routes.tagged, getTagged);

export default userRouter;
