import { initAuth0 } from "@auth0/nextjs-auth0";

const auth0 = initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: "openid profile",
  audience: process.env.JWT_AUDIENCE,
  redirectUri: process.env.REDIRECT_URI,
  postLogoutRedirectUri: process.env.POST_LOGIN_REDIRECT,
  session: {
    cookieSecret: process.env.RANDOMLY_GENERATED_SECRET,
    storeAccessToken: true
  },
});

export default auth0;

export const authUser = async (req, res) => {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      location: "/api/v1/login",
    });
    res.end();
    return { props: {} };
  }
  return session.user;
};

export const isAuthorize = (data, role) => {
  return data && data[process.env.AUTH0_NAMESPACE + "/roles"].includes(role);
};

export const withAuth = getData => role => async ({req, res}) => {
  const session = await auth0.getSession(req);
  if (!session || !session.user || (role && !isAuthorize(session.user, role))) {
    res.writeHead(302, {
      Location: '/api/v1/login'
    });
    res.end();
    return {props: {}};
  }

  const data = getData ? await getData({req, res}, session.user) : {};

  return {props: {user: session.user, ...data}}
}