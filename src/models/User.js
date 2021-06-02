import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  githubId: String,
  facebookId: String,
  profilePhoto: String,
  webSite: String,
  bio: String,
  phoneNumber: String,
  gender: String,
});

UserSchema.plugin(passportLocalMongoose);

const model = mongoose.model("User", UserSchema);
export default model;
