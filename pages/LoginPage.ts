export = {
  email: locate("#email"),
  password: locate("#password"),

  loginBtn: locate("button").withText("Login"),

  invalidUsernameAlert: locate(".toast-body").withText("Incorrect email address or password"),
  sessionExpiredAlert: locate(".toast-body").withText("Your session has expired. Please login again to continue."),
};