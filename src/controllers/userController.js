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

// API
export const searchUser = async (req, res) => {
  const {
    body: { search },
  } = req;

  try {
    if (search) {
      const users = await User.find({}).populate("searchUsers");
      const searchUsers = users.filter(
        (user) => user.name === search || user.username === search
      );
      searchUsers.forEach((user) => {
        console.log(req.user.searchUsers.indexOf(user.id));
        if (req.user.searchUsers.indexOf(user.id) === -1) {
          req.user.searchUsers.push(user);
        }
      });
      await req.user.save();
    }
  } catch (error) {
    console.log(error);
  } finally {
    res.end();
  }
};
