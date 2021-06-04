// Root
const HOME = "/";
const EXPLORE = "/explore";

// User
const USER = "/:username";
const CHANNEL = "/channel";
const SAVED = "/saved";
const TAGGED = "/tagged";

// Create
const CREATE_POST = "/create/post";

// Accounts
const ACCOUNTS = "/accounts";
const EMAILSIGNUP = "/emailsignup";
const LOGIN = "/login";
const LOGOUT = "/logout";
const EDIT = "/edit";

// Post
const POST = "/post/:id";
const EDIT_POST = "/post/:id/edit";

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
  user: (username) => {
    if (username) {
      return `/${username}`;
    } else {
      return USER;
    }
  },
  channel: CHANNEL,
  // channel: (username) => {
  //   if (username) {
  //     return `/${username}/channel`;
  //   } else {
  //     return CHANNEL;
  //   }
  // },
  saved: (username) => {
    if (username) {
      return `/${username}/saved`;
    } else {
      return SAVED;
    }
  },
  tagged: (username) => {
    if (username) {
      return `/${username}/tagged`;
    } else {
      return TAGGED;
    }
  },
  createPost: CREATE_POST,
  accounts: ACCOUNTS,
  emailSignup: EMAILSIGNUP,
  login: LOGIN,
  edit: EDIT,
  post: (id) => {
    if (id) {
      return `/post/${id}`;
    } else {
      return POST;
    }
  },
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
