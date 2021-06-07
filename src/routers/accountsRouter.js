import express from "express";
import {
  getChangePassword,
  getEditProfile,
  getEmailSignup,
  getLogin,
  logout,
  postChangePassword,
  postEditProfile,
  postEmailSignup,
  postLogin,
} from "../controllers/accountsController";
import { uploadProfilePhoto } from "../middlewares";
import routes from "../routes";

const accountsRouter = express.Router();

accountsRouter.get(routes.emailSignup, getEmailSignup);
accountsRouter.post(routes.emailSignup, postEmailSignup, postLogin);

accountsRouter.get(routes.login, getLogin);
accountsRouter.post(routes.login, postLogin);

accountsRouter.get(routes.logout, logout);

accountsRouter.get(routes.editProfile, getEditProfile);
accountsRouter.post(routes.editProfile, uploadProfilePhoto, postEditProfile);

accountsRouter.get(routes.changePassword, getChangePassword);
accountsRouter.post(routes.changePassword, postChangePassword);

export default accountsRouter;
