import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Instagram";
  res.locals.routes = routes;
  next();
};
