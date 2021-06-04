// Root
const HOME = "/";
const EXPLORE = "/explore";

// User
const USER = "/:id";
const CHANNEL = "/channel";
const SAVED = "/saved";
const TAGGED = "/tagged";

// Create
const CREATE = "/create";
const CREATE_POST = "/post";

// Accounts
const ACCOUNTS = "/accounts";
const EMAILSIGNUP = "/emailsignup";
const LOGIN = "/login";
const LOGOUT = "/logout";
const EDIT = "/edit";

// Post
const POSTS = "/posts/:id";
const LIKE_BY = "/like_by";
const EDIT_POST = "/edit";

// Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// Facebook
const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";

// Kakao
const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";

// Google
const GOOGLE = "/auth/google";
const GOOGLE_CALLBACK = "/auth/google/callback";

const routes = {
  home: HOME,
  explore: EXPLORE,
  logout: LOGOUT,
  user: (id) => {
    if (id) {
      return `/${id}`;
    } else {
      return USER;
    }
  },
  channel: CHANNEL,
  saved: SAVED,
  tagged: TAGGED,
  create: CREATE,
  createPost: CREATE_POST,
  accounts: ACCOUNTS,
  emailSignup: EMAILSIGNUP,
  login: LOGIN,
  edit: EDIT,
  posts: (id) => {
    if (id) {
      return `/posts/${id}`;
    } else {
      return POSTS;
    }
  },
  likeBy: LIKE_BY,
  editPost: EDIT_POST,
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  facebook: FACEBOOK,
  facebookCallback: FACEBOOK_CALLBACK,
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK,
  google: GOOGLE,
  googleCallback: GOOGLE_CALLBACK,
};

export default routes;
