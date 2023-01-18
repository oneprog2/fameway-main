import auth0 from "auth0-js";
import {
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN,
  AUTH0_LOGIN_REDIRECT_URI,
  LOGIN_RESPONSE_TYPE,
  AUTH0_USER_SCOPE,
} from "./config";

export const auth = new auth0.WebAuth({
  override: {
    __tenant: "dev-lzkir111o3ip75a0",
    __token_issuer: "https://dev-lzkir111o3ip75a0.us.auth0.com",
  },
  scope: AUTH0_USER_SCOPE,
  domain: AUTH0_DOMAIN,
  clientID: AUTH0_CLIENT_ID,
  redirectUri: AUTH0_LOGIN_REDIRECT_URI,
  responseType: LOGIN_RESPONSE_TYPE,
});
