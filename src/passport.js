import passport from "passport";
import GitHubStrategy from "passport-github";
import { postGithubLogin } from "./controllers/accountsController";
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

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
