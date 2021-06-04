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
  console.log(req.user);
  const {
    body: { title, caption },
    user: { id },
    file,
  } = req;
  try {
    const user = await User.findById(id);
    if (user && file) {
      await Post.create({
        url: file.path,
        type: file.mimetype.split("/")[0],
        title,
        caption,
        creator: user,
      });
      return res.redirect(routes.home);
    } else {
      throw Error;
    }
  } catch (error) {
    console.log(error);
    return res.redirect(routes.createPost);
  }
};

export const posts = (req, res) => {
  return res.send("posts");
};

export const getLikeBy = (_, res) => {
  return res.send("likeBy");
};
