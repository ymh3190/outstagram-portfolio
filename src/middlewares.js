import multer from "multer";
import routes from "./routes";

const multerFile = multer({ dest: "uploads/posts" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Instagram";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user;
  next();
};

export const uploadFile = multerFile.single("postFile");
