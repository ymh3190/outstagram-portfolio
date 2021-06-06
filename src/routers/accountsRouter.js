import express from "express";
import {
  getEditProfile,
  getEmailSignup,
  getLogin,
  logout,
  postEditProfile,
  postEmailSignup,
  postLogin,
} from "../controllers/accountsController";
import { uploadProfilePhoto } from "../middlewares";
import routes from "../routes";

const rootRouter = express.Router();

rootRouter.get(routes.emailSignup, getEmailSignup);
rootRouter.post(routes.emailSignup, postEmailSignup, postLogin);

rootRouter.get(routes.login, getLogin);
rootRouter.post(routes.login, postLogin);

rootRouter.get(routes.logout, logout);

rootRouter.get(routes.editProfile, getEditProfile);
rootRouter.post(routes.editProfile, uploadProfilePhoto, postEditProfile);

export default rootRouter;
