import passport from "passport";
import User from "../models/User";
import routes from "../routes";

export const getEmailSignup = (_, res) => {
  return res.render("emailSignup");
};
export const postEmailSignup = async (req, res, next) => {
  const {
    body: { email, fullName, username, password },
  } = req;

  try {
    const newUser = await User({
      email,
      name: fullName,
      username,
    });
    await User.register(newUser, password);
    next();
  } catch (error) {
    console.log(error);
    return res.redirect(`/accounts${routes.emailSignup}`);
  }
};

export const getLogin = (_, res) => {
  return res.render(`login`);
};
export const postLogin = passport.authenticate("local", {
  failureRedirect: `/accounts${routes.login}`,
  successRedirect: routes.home,
});

export const githubLogin = passport.authenticate("github");
export const postGithubLogin = async (_, __, profile, cb) => {
  const {
    _json: { login, id, avatar_url: avatarUrl, email, name },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      await user.save();
      return cb(null, user);
    } else {
      const newUser = await User.create({
        email,
        name,
        username: login,
        githubId: id,
        profilePhoto: avatarUrl,
      });
      return cb(null, newUser);
    }
  } catch (error) {
    return cb(error);
  }
};
