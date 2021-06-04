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

export const logout = (req, res) => {
  req.logout();
  console.log("asdf");
  res.redirect(routes.home);
};

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

export const facebookLogin = passport.authenticate("facebook", {
  scope: ["email"],
});
export const postFacebookLogin = async (_, __, profile, cb) => {
  const {
    _json: {
      email,
      name,
      id,
      picture: {
        data: { url: pictureUrl },
      },
    },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.facebookId = id;
      await user.save();
      return cb(null, user);
    } else {
      const newUser = await User.create({
        email,
        name,
        username: email.split("@")[0],
        facebookId: id,
        profilePhoto: pictureUrl,
      });
      return cb(null, newUser);
    }
  } catch (error) {
    return cb(error);
  }
};

export const kakaoLogin = passport.authenticate("kakao");
export const postKakaoLogin = async (_, __, profile, cb) => {
  const {
    _json: {
      id,
      properties: { nickname, profile_image: profileImage },
      kakao_account: { email },
    },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.kakaoId = id;
      await user.save();
      return cb(null, user);
    } else {
      const newUser = await User.create({
        email,
        name: nickname,
        username: email.split("@")[0],
        kakaoId: id,
        profilePhoto: profileImage,
      });
      return cb(null, newUser);
    }
  } catch (error) {
    return cb(error);
  }
};

export const googleLogin = passport.authenticate("google", {
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ],
});
export const postGoogleLogin = async (_, __, profile, cb) => {
  const {
    _json: { sub, name, picture, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.googleId = sub;
      await user.save();
      return cb(null, user);
    } else {
      const newUser = await User.create({
        email,
        name,
        username: email.split("@")[0],
        googleId: sub,
        profilePhoto: picture,
      });
      return cb(null, newUser);
    }
  } catch (error) {
    return cb(error);
  }
};
