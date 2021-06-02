import routes from "./routes";

// eslint-disable-next-line import/prefer-default-export
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Instagram";
  res.locals.routes = routes;
  res.locals.user = req.user;
  next();
};
