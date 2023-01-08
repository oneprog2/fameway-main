import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { configureStore } from "./redux/Store";
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";
import Spinner from "./views/spinner/Spinner";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-lzkir111o3ip75a0.us.auth0.com"
    clientId="fvFanDY5XxF2Op7kITivNKSox5mv6e6M"
    redirectUri={window.location.origin}
  >
    <Provider store={configureStore()}>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
reportWebVitals();
