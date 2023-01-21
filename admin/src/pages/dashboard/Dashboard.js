import React, { useEffect } from "react";
import {
  Grid,
  Button,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import ThemeSelect from "./ThemeSelect";

import Breadcrumb from "../../layouts/full-layout/breadcrumb/Breadcrumb";
import PageContainer from "../../components/container/PageContainer";
import { gql } from "@apollo/client";

export const STORES = gql`
  query {
    store {
      id
      name
    }
  }
`;

const Dashboard1 = () => {
  const { user, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <PageContainer
      title="Fameway - Gestion de boutique"
      description="Main informations"
    >
      <Breadcrumb
        title={`Hello ${user?.username}`}
        subtitle={`C'est le come back !`}
      ></Breadcrumb>
    </PageContainer>
  );
};

export default Dashboard1;
