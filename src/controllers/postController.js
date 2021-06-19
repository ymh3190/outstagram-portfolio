import Post from "../models/Post";
import User from "../models/User";
import Comment from "../models/Comment";
import routes from "../routes";

export const home = async (req, res) => {
  if (req.user) {
    const user = await User.findById({ _id: req.user.id }).populate("searches");
    const posts = await Post.find({ creator: user })
      .populate("creator")
      .populate("comments")
      .sort({ createdAt: "desc" });
    return res.render("home", { posts, loggedUser: user });
  } else {
    return res.render("home");
  }
};

export const getExplore = async (req, res) => {
  if (req.user) {
    const user = await User.findById({ _id: req.user.id }).populate("searches");
    const posts = await Post.find({ creator: user.id })
      .populate("creator")
      .populate("comments");
    return res.render("explore", { posts, loggedUser: user });
  } else {
    return res.render("explore");
  }
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
      const post = await Post({
        url: file.path,
        type: file.mimetype.split("/")[0],
        title,
        caption,
        creator: user,
      });
      await post.save();
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

export const deletePost = async (req, res) => {
  const id = req.baseUrl.split("posts/")[1];
  await Post.findByIdAndDelete(id);
  return res.redirect(routes.home);
};

// API
export const savePost = async (req, res) => {
  const { data } = req.body;
  const { id } = req.user;

  try {
    const post = await Post.findById(data);
    const user = await User.findById(id);
    if (user.saves.indexOf(post.id) === -1) {
      user.saves.push(post);
      await user.save();
    } else {
      user.saves.splice(user.saves.indexOf(post.id), 1);
      await user.save();
    }
  } catch (error) {
    console.log(error);
  } finally {
    res.end();
  }
};

export const addComment = async (req, res) => {
  const { data, id, username } = req.body;

  try {
    const post = await Post.findById(id);
    const comment = await Comment.create({
      creator: username,
      text: data,
    });
    post.comments.push(comment);
    await post.save();
  } catch (error) {
    console.log(error);
  } finally {
    res.end();
  }
};
