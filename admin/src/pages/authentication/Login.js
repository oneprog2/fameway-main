import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";

import CustomCheckbox from "../../../src/components/forms/custom-elements/CustomCheckbox";

import CustomTextField from "../../../src/components/forms/custom-elements/CustomTextField";

import { VisibilityOff, Visibility } from "@mui/icons-material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState();

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        backgroundColor: {
          xs: "white",
          sm: "white",
          md: "#222222",
          lg: "#222222",
          xl: "#222222",
        },
      }}
    >
      <Grid
        item
        md={6}
        lg={7}
        display="flex"
        alignItems="center"
        sx={{
          paddingTop: { xs: 10, sm: 0, md: 0, lg: 0 },
          zIndex: 10,
          borderTopRightRadius: { lg: 55, xl: 55, md: 55 },
          borderBottomRightRadius: { lg: 55, xl: 55, md: 55 },
          backgroundColor: "white",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        <Box
          sx={{
            top: {
              xs: 0,
              sm: 30,
              md: 30,
              lg: 30,
              xl: 30,
            },
            left: {
              xs: 0,
              sm: 30,
              md: 30,
              lg: 30,
              xl: 30,
            },
            position: {
              xs: "relative",
              sm: "absolute",
              md: "absolute",
              lg: "absolute",
              xl: "absolute",
            },
            marginBottom: { xs: 5 },
            height: {
              xs: "80px",
              sm: "50px",
              md: "50px",
              lg: "50px",
              xl: "50px",
            },
          }}
        >
          <img
            style={{
              height: "100%",
            }}
            src={
              "https://global-uploads.webflow.com/62f0c9ac63e2203fac4be612/62f0d831f9175953746e46b4_62dfe1b50e142ed34127e6c3_logo.svg"
            }
          ></img>
        </Box>

        <Grid container spacing={0} display="flex" justifyContent="center">
          <Grid item xs={12} lg={9} xl={6}>
            <Box
              sx={{
                p: {
                  xs: 4,
                  sm: 10,
                  md: 4,
                  lg: 4,
                  xl: 0,
                },
              }}
            >
              <Typography
                fontWeight="700"
                variant="h1"
                style={{ marginBottom: 10 }}
              >
                (Re) Bienvenue sur Fameway !
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography
                  color="textSecondary"
                  variant="h4"
                  fontWeight="500"
                  sx={{
                    mr: 1,
                  }}
                >
                  Connecte toi pour gérer ta boutique sécurisée.
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 4,
                }}
              >
                {/* <CustomFormLabel htmlFor="email">Ton mail</CustomFormLabel> */}
                <CustomTextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FeatherIcon size={20} icon="user" />
                      </InputAdornment>
                    ),
                  }}
                  style={{
                    backgroundColor: "#f0f0f0",
                    borderRadius: 5,
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  placeholder="Email ou nom de créateur"
                  variant="outlined"
                  fullWidth
                />

                <>
                  <CustomTextField
                    style={{
                      backgroundColor: "#f0f0f0",
                      borderRadius: 5,
                    }}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FeatherIcon size={20} icon="lock" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onMouseUp={() => setShowPassword(false)}
                            onMouseDown={() => setShowPassword(true)}
                            edge="end"
                          >
                            {!showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    variant="outlined"
                    fullWidth
                    placeholder="Mot de passe"
                    sx={{
                      mt: 2,
                      mb: 3,
                    }}
                  />
                  <Box
                    sx={{
                      display: {
                        xs: "block",
                        sm: "flex",
                        lg: "flex",
                      },
                      alignItems: "center",
                    }}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<CustomCheckbox defaultChecked />}
                        label="Se souvenir de moi"
                        sx={{
                          mb: 2,
                        }}
                      />
                    </FormGroup>
                    <Box
                      sx={{
                        ml: "auto",
                      }}
                    >
                      <Typography
                        fontWeight="500"
                        sx={{
                          fontSize: "14px",
                          display: "block",
                          textDecoration: "none",
                          mb: "16px",
                          color: "primary.main",
                          cursor: "pointer",
                        }}
                      >
                        Mot de passe oublié ?
                      </Typography>
                    </Box>
                  </Box>
                </>

                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={email !== "illiasse@fameway.co" && password === ""}
                  sx={{
                    mt: 3,
                    fontWeight: "700",
                    borderRadius: "100px",
                    pt: "10px",
                    pb: "10px",
                  }}
                >
                  Me connecter
                </Button>

                <Box>
                  {email !== "illiasse@fameway.co" ? (
                    <Button
                      variant="outlined"
                      size="large"
                      display="flex"
                      alignitems="center"
                      justifycontent="center"
                      sx={{
                        borderRadius: "100px",
                        width: "100%",
                        borderColor: (theme) =>
                          `${
                            theme.palette.mode === "dark"
                              ? "#42464d"
                              : "#dde3e8"
                          }`,
                        borderWidth: "2px",
                        textAlign: "center",
                        mt: 2,
                        pt: "10px",
                        pb: "10px",
                        "&:hover": {
                          borderColor: (theme) =>
                            `${
                              theme.palette.mode === "dark"
                                ? "#42464d"
                                : "#dde3e8"
                            }`,
                          borderWidth: "2px",
                        },
                      }}
                    >
                      <Box display="flex" alignItems="center">
                        <img
                          style={{ width: 25, height: 25 }}
                          src={
                            "https://res.cloudinary.com/dgzpshsab/image/upload/v1673514918/google-logo-icon-png-transparent-background-osteopathy-16_xuuafj.png"
                          }
                        ></img>
                        {/* <GoogleIcon
                          sx={{
                            color: (theme) => theme.palette.error.main,
                          }}
                        /> */}
                        <Typography
                          variant="h6"
                          sx={{
                            ml: 1,
                            color: (theme) =>
                              `${
                                theme.palette.mode === "dark"
                                  ? theme.palette.grey.A200
                                  : "#13152a"
                              }`,
                          }}
                        >
                          Me connecter avec Gmail
                        </Typography>
                      </Box>
                    </Button>
                  ) : null}
                </Box>

                {email !== "illiasse@fameway.co" ? (
                  <>
                    <Box
                      sx={{
                        position: "relative",
                        textAlign: "center",
                        mt: "30px",
                        mb: "20px",
                        "&::before": {
                          content: '""',
                          background: (theme) =>
                            `${
                              theme.palette.mode === "dark"
                                ? "#42464d"
                                : "#ecf0f2"
                            }`,
                          height: "1px",
                          width: "100%",
                          position: "absolute",
                          left: "0",
                          top: "11px",
                        },
                      }}
                    >
                      <Typography
                        component="span"
                        color="textSecondary"
                        variant="h6"
                        fontWeight="400"
                        sx={{
                          position: "relative",
                          padding: "0 12px",
                          background: (theme) =>
                            `${
                              theme.palette.mode === "dark"
                                ? "#282c34"
                                : "#ffffff"
                            }`,
                        }}
                      >
                        PAS DE COMPTE ?
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center">
                      <Typography
                        color="textPrimary"
                        variant="h4"
                        textAlign="center"
                        align="center"
                        position="center"
                        fontWeight="500"
                        sx={{
                          flex: 1,
                          mt: 2,
                          mr: 1,
                          mb: 2,
                        }}
                      >
                        Tu as une communauté de +10k fans ?
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        marginTop: 17,
                      }}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        href="/auth/register"
                        sx={{
                          fontWeight: "700",
                          borderRadius: "100px",
                          pt: "10px",
                          pb: "10px",
                        }}
                      >
                        Créer ma boutique
                      </Button>
                    </Box>
                  </>
                ) : null}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        md={6}
        lg={5}
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          background: (theme) =>
            `${theme.palette.mode === "dark" ? "#1c1f25" : "#222222"}`,
        }}
      >
        <Box
          sx={{
            marginLeft: -8,

            backgroundImage:
              "url(https://res.cloudinary.com/dgzpshsab/image/upload/v1673514005/Stars_kw03wm.svg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

Login.layout = "Blank";
export default Login;
