import "@babel/polyfill";
import "./db";
import "./models/Comment";
import "./models/Post";
import "./models/User";
import app from "./server";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("[SERVER ON]"));
