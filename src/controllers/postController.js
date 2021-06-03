import User from "../models/User";
import routes from "../routes";

export const home = async (req, res) => {
  return res.render("home");
};

export const explore = (_, res) => {
  return res.render("explore");
};

export const getCreatePost = (_, res) => res.render("createPost");
export const postCreatePost = async (req, res) => {
  console.log(req);
  res.redirect(routes.createPost);
};

export const post = (req, res) => {
  res.send("post");
};
