import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  url: String,
});

const model = mongoose.model("Post", PostSchema);
export default model;
