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
  username: String,
  githubId: Number,
  facebookId: Number,
  kakaoId: Number,
  profilePhoto: String,
  webSite: String,
  bio: String,
  phoneNumber: String,
  gender: String,
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);
export default model;
