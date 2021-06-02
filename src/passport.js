import passport from "passport";
import GitHubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import {
  postFacebookLogin,
  postGithubLogin,
} from "./controllers/accountsController";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: routes.gitHubCallback,
    },
    postGithubLogin
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: routes.facebookCallback,
      profileFields: ["id", "displayName", "picture", "email"],
    },
    postFacebookLogin
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
