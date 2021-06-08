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

accountsRouter.route(routes.login).get(getLogin).post(postLogin);
accountsRouter.get(routes.logout, logout);
accountsRouter
  .route(routes.emailSignup)
  .get(getEmailSignup)
  .post(postEmailSignup, postLogin);
accountsRouter
  .route(routes.editProfile)
  .get(getEditProfile)
  .post(uploadProfilePhoto, postEditProfile);
accountsRouter
  .route(routes.changePassword)
  .get(getChangePassword)
  .post(postChangePassword);

export default accountsRouter;
