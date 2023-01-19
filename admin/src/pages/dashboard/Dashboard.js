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
    <PageContainer title="Dashboard" description="Main informations">
      <Breadcrumb
        title={`Hello ${user?.name}`}
        subtitle={`C'est le come back !`}
      >
        <ThemeSelect />
        <Button
          to="/user-profile"
          component={NavLink}
          sx={{
            ml: 1,
          }}
          variant="contained"
          color="primary"
        >
          <FeatherIcon icon="user" width="18" height="18" />
          <Box fontWeight="400" sx={{ ml: 1 }}>
            Profile
          </Box>
        </Button>
      </Breadcrumb>
    </PageContainer>
  );
};

export default Dashboard1;
