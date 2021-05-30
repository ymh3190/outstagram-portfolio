const HOME = "/";
const EXPLORE = "/explore";
const LOGOUT = "/logout";
const USER = "/:id";
const CREATE_POST = "/create/post";
const ACCOUNTS_EMAILSIGNUP = "/accounts/emailsignup";
const ACCOUNTS_LOGIN = "/accounts/login";
const POST = "/post/:id";
const EDIT_POST = "/post/:id/edit";

const routes = {
  home: HOME,
  explore: EXPLORE,
  logout: LOGOUT,
  user: USER,
  createPost: CREATE_POST,
  accountsEmailsignup: ACCOUNTS_EMAILSIGNUP,
  accountsLogin: ACCOUNTS_LOGIN,
  post: POST,
  editPost: EDIT_POST,
};

export default routes;

/* const HOME = "/";
const EXPLORE = "/explore";
const SIGNIN = "/signup";
const LOGIN = "/login";

const USERS = "/users";
const PROFILE = "/:id/profile";
const EDIT_PROFILE = "/:id/edit-profile";
const CREATE_POST = "/:id/create-post";
const CREATE_VIDEO = "/:id/create-video";

const POSTS = "/posts";
const POST = "/:id/";

const routes = {
  home: HOME,
  explore: EXPLORE,
  signin: SIGNIN,
  login: LOGIN,
  users: USERS,
  profile: PROFILE,
  editProfile: EDIT_PROFILE,
  createPost: CREATE_POST,
  createVideo: CREATE_VIDEO,
  posts: POSTS,
};

export default routes; */
