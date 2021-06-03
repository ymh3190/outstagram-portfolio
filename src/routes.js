// Root
const HOME = "/";
const EXPLORE = "/explore";
const LOGOUT = "/logout";

// User
const USER = "/:id";
const CHANNEL = "channel";
const SAVED = "saved";
const TAGGED = "tagged";

// Create
const CREATE_POST = "/create/post";

// Accounts
const ACCOUNTS = "/accounts";
const EMAILSIGNUP = "/emailsignup";
const LOGIN = "/login";
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
  channel: (id) => {
    if (id) {
      return `/${id}/channel`;
    } else {
      return CHANNEL;
    }
  },
  saved: (id) => {
    if (id) {
      return `/${id}/saved`;
    } else {
      return SAVED;
    }
  },
  tagged: (id) => {
    if (id) {
      return `/${id}/tagged`;
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
};

export default routes;
