import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "../layouts/full-layout/loadable/Loadable";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/FullLayout"))
);
const BlankLayout = Loadable(
  lazy(() => import("../layouts/blank-layout/BlankLayout"))
);
/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/authentication/Error")));
/* ****Routes***** */
const Login = Loadable(lazy(() => import("../pages/authentication/Login")));
const Register = Loadable(
  lazy(() => import("../pages/authentication/Register"))
);
const Callback = Loadable(
  lazy(() => import("../pages/authentication/Callback"))
);

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import("../pages/dashboard/Dashboard")));

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboards/starter" /> },
      { path: "/dashboards/starter", exact: true, element: <Dashboard /> },
      { path: "*", element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: "/auth",
    element: <BlankLayout />,
    children: [
      { path: "callback", element: <Callback /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "404", element: <Error /> },
      { path: "*", element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
