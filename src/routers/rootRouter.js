import express from "express";
import passport from "passport";
import {
  facebookLogin,
  githubLogin,
  googleLogin,
  kakaoLogin,
} from "../controllers/accountsController";
import {
  explore,
  getCreatePost,
  home,
  post,
  postCreatePost,
} from "../controllers/postController";
import { user } from "../controllers/userController";
import { uploadFile, uploadImage, uploadVideo } from "../middlewares";
import routes from "../routes";

const rootRouter = express.Router();

rootRouter.get(routes.home, home);
rootRouter.get(routes.explore, explore);

rootRouter.get(routes.github, githubLogin);
rootRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: routes.login }),
  (_, res) => {
    res.redirect(routes.home);
  }
);

rootRouter.get(routes.facebook, facebookLogin);
rootRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: routes.login }),
  (_, res) => {
    res.redirect(routes.home);
  }
);

rootRouter.get(routes.kakao, kakaoLogin);
rootRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: routes.login }),
  (_, res) => {
    res.redirect(routes.home);
  }
);

rootRouter.get(routes.google, googleLogin);
rootRouter.get(
  routes.googleCallback,
  passport.authenticate("google", { failureRedirect: routes.login }),
  (_, res) => {
    res.redirect(routes.home);
  }
);

rootRouter.get(routes.createPost, getCreatePost);
rootRouter.post(routes.createPost, uploadFile, postCreatePost);

rootRouter.get(routes.post(), post);
rootRouter.get(routes.user(), user);

export default rootRouter;
