const HOME = "/";
const EXPLORE = "/explore";
const LOGOUT = "/logout";
const USER = "/:id";
const CHANNEL = "channel";
const SAVED = "saved";
const TAGGED = "tagged";
const CREATE_POST = "/create/post";
const ACCOUNTS_EMAILSIGNUP = "/accounts/emailsignup";
const ACCOUNTS_LOGIN = "/accounts/login";
const POST = "/post/:id";
const EDIT_POST = "/post/:id/edit";

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
  accountsEmailsignup: ACCOUNTS_EMAILSIGNUP,
  accountsLogin: ACCOUNTS_LOGIN,
  post: (id) => {
    if (id) {
      return `/post/${id}`;
    } else {
      return POST;
    }
  },
  editPost: EDIT_POST,
};

export default routes;
