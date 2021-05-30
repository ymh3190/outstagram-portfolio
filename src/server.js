import express from "express";
import morgan from "morgan";
import path from "path";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import { posts } from "./e.g";

const app = express();

const PORT = 8080;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.get(routes.home, (_, res) => res.render("home", { posts }));
app.get(routes.search, (_, res) => res.render("search"));
app.get(routes.post, (_, res) => res.render("post"));
app.get(routes.activity, (_, res) => res.render("search"));
app.get(routes.user, (_, res) => res.render("search"));

app.listen(PORT, () => console.log("[SERVER ON]"));
