const express = require("express");
const supertokens = require("supertokens-node");
const Session = require("supertokens-node/recipe/session");
const EmailPassword = require("supertokens-node/recipe/emailpassword");
const { middleware } = require("supertokens-node/framework/express");
const {
  verifySession,
} = require("supertokens-node/recipe/session/framework/express");

supertokens.init({
  framework: "express",
  supertokens: {
    connectionURI:
      "https://dev-2c7e77a1844c11ed8f735da04db9b8af-eu-west-1.aws.supertokens.io:3573",
    apiKey: "AD4-8=A2rTHTH1wl=i0RQyEpQbmENX",
  },
  appInfo: {
    appName: "Hasura",
    apiDomain: "http://localhost:3333",
    websiteDomain: "http://localhost:3333",
    apiBasePath: "/api",
    websiteBasePath: "/auth",
  },
  recipeList: [
    EmailPassword.init(),
    Session.init({
      jwt: {
        enable: true,
        issuer: "<your-ngrock-url>",
      },
      override: {
        functions: function (originalImplementation) {
          return {
            ...originalImplementation,
            createNewSession: async function (input) {
              input.accessTokenPayload = {
                ...input.accessTokenPayload,
                "https://hasura.io/jwt/claims": {
                  "x-hasura-user-id": input.userId,
                  "x-hasura-default-role": "user",
                  "x-hasura-allowed-roles": ["user"],
                },
              };

              return originalImplementation.createNewSession(input);
            },
          };
        },
      },
    }),
  ],
});

const app = express();

app.get("/getJWT", verifySession(), async (req, res) => {
  let session = req.session;
  let jwt = session.getAccessTokenPayload()["jwt"];

  res.json({ token: jwt });
});

app.use(
  cors({
    origin: "localhost:3000",
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
  })
);

app.use(middleware());

app.listen(3333, () => console.log("Server started!"));
