import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { configureStore } from "./redux/Store";
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";
import Spinner from "./pages/spinner/Spinner";
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0Provider } from "@auth0/auth0-react";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const hasuraUri =
  "https://c82e-2001-1c00-2403-4c00-b04a-a75c-233d-5d39.eu.ngrok.io/v1/graphql";

const AuthorizedApolloProvider = ({ children }) => {
  const { getAccessTokenSilently, isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    const httpLink = createHttpLink({
      uri: hasuraUri,
    });

    const authLink = setContext(async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        console.log(token);
        return {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      } else {
        return {};
      }
    });

    const apolloClient = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      connectToDevTools: true,
    });

    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
  }
};

ReactDOM.render(
  <Auth0Provider
    domain="dev-lzkir111o3ip75a0.us.auth0.com"
    clientId="fvFanDY5XxF2Op7kITivNKSox5mv6e6M"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
    audience={"fameway-admin"}
    error={console.log}
  >
    <AuthorizedApolloProvider>
      <Provider store={configureStore()}>
        <Suspense fallback={<Spinner />}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </Provider>
    </AuthorizedApolloProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
reportWebVitals();
