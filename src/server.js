import express from "express";
import morgan from "morgan";
import path from "path";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import rootRouter from "./routers/rootRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, rootRouter);

export default app;
