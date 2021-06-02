import express from "express";
import {
  getEmailSignup,
  getLogin,
  postEmailSignup,
  postLogin,
} from "../controllers/accountsController";
import routes from "../routes";

const rootRouter = express.Router();

rootRouter.get(routes.emailSignup, getEmailSignup);
rootRouter.post(routes.emailSignup, postEmailSignup, postLogin);
rootRouter.get(routes.login, getLogin);
rootRouter.post(routes.login, postLogin);

export default rootRouter;
