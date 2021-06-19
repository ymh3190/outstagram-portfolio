import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import createRouter from "./routers/createRouter";
import accountsRouter from "./routers/accountsRouter";
import postRouter from "./routers/postRouter";
import apiRouter from "./routers/apiRouter";

import "./passport";

const app = express();

app.set("view engine", "pug");
app.set("views", `${process.cwd()}/src/views`);
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/uploads", express.static(path.join("uploads")));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  })
);
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, rootRouter);
app.use(routes.accounts, accountsRouter);
app.use(routes.create, createRouter);
app.use(routes.posts(), postRouter);
app.use(routes.user(), userRouter);
app.use(routes.api, apiRouter);

export default app;
