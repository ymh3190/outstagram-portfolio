import Post from "../models/Post";
import User from "../models/User";
import routes from "../routes";

export const home = async (req, res) => {
  if (req.user) {
    const user = await User.findById({ _id: req.user.id }).populate("searches");
    const posts = await Post.find({ creator: user.id })
      .populate("creator")
      .populate("comments");
    return res.render("home", { posts, loggedUser: user });
  } else {
    return res.render("home");
  }
};

export const getExplore = async (_, res) => {
  const posts = await Post.find({});
  return res.render("explore", { posts });
};

export const getCreatePost = (_, res) => res.render("createPost");
export const postCreatePost = async (req, res) => {
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
    return res.redirect(`/create${routes.createPost}`);
  }
};

export const posts = (req, res) => {
  return res.send("posts");
};

export const getLikeBy = (_, res) => {
  return res.send("likeBy");
};
