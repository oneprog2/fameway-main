import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  InputAdornment,
} from "@mui/material";

import CustomCheckbox from "../../../src/components/forms/custom-elements/CustomCheckbox";
import GoogleIcon from "@mui/icons-material/Google";

import CustomTextField from "../../../src/components/forms/custom-elements/CustomTextField";

import img1 from "../../assets/images/backgrounds/login-bg.svg";
import { Unpublished, CheckCircle } from "@mui/icons-material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        justifyContent: "center",
        backgroundColor: "#222222",
      }}
    >
      <Grid
        item
        // xs={12}
        sm={12}
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
        }}
      >
        <Grid container spacing={0} display="flex" justifyContent="center">
          <Grid item xs={12} lg={9} xl={6}>
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography
                fontWeight="700"
                variant="h1"
                style={{ marginBottom: 10 }}
              >
                Bienvenue sur Fameway
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
                    endAdornment: (
                      <InputAdornment position="start">
                        {email !== "illiasse@fameway.co" ? (
                          <Unpublished
                            style={{
                              color: "grey",
                            }}
                          />
                        ) : (
                          <CheckCircle
                            style={{
                              color: "green",
                            }}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                  // leftIcon={
                  //   <LogoIcon
                  //     sx={{
                  //       color: (theme) => theme.palette.grey[500],
                  //     }}
                  //   />
                  // }
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  placeholder="Email ou nom de créateur"
                  variant="outlined"
                  fullWidth
                />

                {email === "illiasse@fameway.co" ? (
                  <>
                    <CustomTextField
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      type="password"
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
                        {/* <NextLink href="/authentication/reset-password">
                          <Typography
                            fontWeight="500"
                            sx={{
                              fontSize: "14px",
                              display: "block",
                              textDecoration: "none",
                              mb: "16px",
                              color: "secondary.main",
                              cursor: "pointer",
                            }}
                          >
                            Mot de passe oublié ?
                          </Typography>
                        </NextLink> */}
                      </Box>
                    </Box>
                  </>
                ) : null}

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
                        <GoogleIcon
                          sx={{
                            color: (theme) => theme.palette.error.main,
                          }}
                        />
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
                        OU
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
                {/* <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={6}>
                  <Button
                    variant="outlined"
                    size="large"
                    display="flex"
                    alignitems="center"
                    justifycontent="center"
                    sx={{
                      width: "100%",
                      borderColor: (theme) =>
                        `${
                          theme.palette.mode === "dark" ? "#42464d" : "#dde3e8"
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
                      <FacebookIcon
                        sx={{
                          color: (theme) => theme.palette.secondary.main,
                        }}
                      />
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
                        Facebook
                      </Typography>
                    </Box>
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <Button
                    variant="outlined"
                    size="large"
                    display="flex"
                    alignitems="center"
                    justifycontent="center"
                    sx={{
                      width: "100%",
                      borderColor: (theme) =>
                        `${
                          theme.palette.mode === "dark" ? "#42464d" : "#dde3e8"
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
                      <TwitterIcon
                        sx={{
                          color: (theme) => theme.palette.primary.main,
                        }}
                      />
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
                        Twitter
                      </Typography>
                    </Box>
                  </Button>
                </Grid>
              </Grid> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            p: 4,
            position: "absolute",
            top: "0",
          }}
        >
          {/* <LogoIcon /> */}
        </Box>
      </Grid>
      <Grid
        item
        xs={0}
        sm={0}
        md={6}
        lg={5}
        sx={{
          background: (theme) =>
            `${theme.palette.mode === "dark" ? "#1c1f25" : "#222222"}`,
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "100%",
          }}
        >
          <img
            src={img1}
            alt="bg"
            layout="fill"
            style={{
              objectPosition: "center",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

Login.layout = "Blank";
export default Login;
