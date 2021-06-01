export const home = (req, res) => {
  return res.render("home");
};

export const explore = (_, res) => {
  return res.render("explore");
};

export const post = (req, res) => {
  res.send("post");
};
