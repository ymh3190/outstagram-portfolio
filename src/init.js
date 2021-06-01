import "@babel/polyfill";
import "./db";
import app from "./server";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("[SERVER ON]"));
