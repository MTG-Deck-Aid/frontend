import { Auth0Client } from "@auth0/nextjs-auth0/server";

/**
 * Adding a audience parameter ensures a JWT token is returned instead
 * of a opaque token. This is required for backend validation.
 */
export const auth0 = new Auth0Client({
  authorizationParameters: {
    scope: "openid profile email",
    audience: "https://dev-4fkntnkolrbspczs.us.auth0.com/api/v2/",
  },
});
