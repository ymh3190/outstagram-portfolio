import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  creator: String,
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
});

const model = mongoose.model("Comment", commentSchema);
export default model;
