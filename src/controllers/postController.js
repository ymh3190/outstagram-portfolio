import Post from "../models/Post";
import User from "../models/User";
import routes from "../routes";

export const home = async (req, res) => {
  if (req.user) {
    const posts = await Post.find({ creator: req.user.id })
      .populate("creator")
      .populate("comments");
    return res.render("home", { posts });
  } else {
    return res.render("home");
  }
};

export const explore = (_, res) => {
  return res.render("explore");
};

export const getCreatePost = (_, res) => res.render("createPost");
export const postCreatePost = async (req, res) => {
  const {
    body: { title, caption },
    user: { _id, username },
    file,
  } = req;
  try {
    const user = await User.findById(_id);
    if (user && file) {
      await Post.create({
        url: file.path,
        title,
        caption,
        creator: user,
      });
      return res.redirect(routes.user(username));
    } else {
      throw Error;
    }
  } catch (error) {
    console.log(error);
    return res.redirect(routes.createPost);
  }
};

export const post = (req, res) => {
  return res.send("post");
};
