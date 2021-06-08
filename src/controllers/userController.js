import Post from "../models/Post";
import User from "../models/User";
import routes from "../routes";

export const getUser = async (req, res) => {
  if (req.user) {
    const posts = await Post.find({ creator: req.user.id });
    return res.render("user", { posts });
  }
};
export const postUser = async (req, res) => {
  const {
    user: { id },
    file,
  } = req;
  const user = await User.findById(id);
  try {
    if (user && file) {
      await user.updateOne({ profilePhoto: `/${file.path}` });
      return res.redirect(`${routes.user(user.username)}`);
    } else {
      throw Error;
    }
  } catch (error) {
    console.log(error);
    return res.redirect(`${routes.user(user.username)}`);
  } finally {
    res.end();
  }
};
export const getChannel = (_, res) => res.render("channel");
export const getSaved = (_, res) => res.render("saved");
export const getTagged = (_, res) => res.render("tagged");
