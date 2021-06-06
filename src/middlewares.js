import multer from "multer";
import routes from "./routes";

const multerPost = multer({ dest: "uploads/posts" });
const multerProfilePhoto = multer({ dest: "uploads/profilePhoto" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Outstagram";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user;
  next();
};

export const uploadPost = multerPost.single("postFile");
export const uploadProfilePhoto = multerProfilePhoto.single("profilePhotoFile");
