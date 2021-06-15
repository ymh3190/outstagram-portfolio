import Post from "../models/Post";
import User from "../models/User";
import routes from "../routes";

export const getUser = async (req, res) => {
  if (req.user) {
    const user = await User.findById({ _id: req.user.id }).populate("searches");
    const posts = await Post.find({ creator: req.user.id });
    return res.render("user", { posts, loggedUser: user });
  } else {
    return res.render("user", { posts: [] });
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

export const searchUser = async (req, res) => {
  const {
    body: { search },
  } = req;

  try {
    if (search) {
      const users = await User.find({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { username: { $regex: search, $options: "i" } },
        ],
      });
      users.forEach(async (user) => {
        if (req.user.searches.indexOf(user.id) === -1) {
          req.user.searches.push(user);
          await req.user.save();
        }
      });
    } else {
      for (let i = 0; i < req.user.searches.length; i += 1) {
        req.user.searches.pop();
      }
      await req.user.save();
    }
  } catch (error) {
    throw Error;
  } finally {
    res.end();
  }
};
