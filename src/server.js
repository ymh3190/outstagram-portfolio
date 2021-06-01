import express from "express";
import path from "path";
import bodyParser from "body-parser";
import morgan from "morgan";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, rootRouter);
app.use(routes.user(), userRouter);

export default app;
