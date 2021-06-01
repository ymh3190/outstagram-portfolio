import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.channel);
userRouter.get(routes.saved);
userRouter.get(routes.tagged);

export default userRouter;
