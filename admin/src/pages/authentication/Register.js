import React, { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";

import CustomTextField from "../../../src/components/forms/custom-elements/CustomTextField";

// import img1 from "../../assets/images/backgrounds/login-bg.svg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [step2, setStep2] = useState(false);

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
        xs={12}
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
                Créé ta boutique et vends ton contenu en quelques minutes.
              </Typography>
              <Box
                display="flex"
                alignItems="left"
                style={{
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <Typography
                  color="textSecondary"
                  variant="h5"
                  fontWeight="500"
                  sx={{
                    mr: 1,
                  }}
                >
                  Pour commencer, entre les informations pour créer ton compte.
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="h5"
                  fontWeight="500"
                  sx={{
                    mr: 1,
                  }}
                >
                  (le nom de ta boutique sera défini plus tard)
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 4,
                }}
              >
                <Box
                  style={{
                    marginTop: 10,
                  }}
                >
                  <CustomTextField
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    id="email"
                    placeholder="Ton mail"
                    variant="outlined"
                    fullWidth
                  />
                </Box>

                <CustomTextField
                  style={{
                    marginTop: 10,
                    marginBottom: 15,
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  placeholder="Nom de créateur / d'utilisateur"
                  variant="outlined"
                  fullWidth
                />

                <CustomTextField
                  style={{
                    marginBottom: 15,
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="password"
                  placeholder="Mot de passe"
                  variant="outlined"
                  fullWidth
                />

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
                    onClick={() => {
                      setStep2(true);
                    }}
                    disabled={email === "" || username === ""}
                    sx={{
                      fontWeight: "700",
                      borderRadius: "100px",
                      pt: "10px",
                      pb: "10px",
                    }}
                  >
                    Continuer
                  </Button>
                </Box>

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
                          theme.palette.mode === "dark" ? "#42464d" : "#ecf0f2"
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
                          theme.palette.mode === "dark" ? "#282c34" : "#ffffff"
                        }`,
                    }}
                  >
                    OU
                  </Typography>
                </Box>

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
                          Créer ta boutique avec ton Gmail
                        </Typography>
                      </Box>
                    </Button>
                  ) : null}
                </Box>
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
          {/* <Image
            src={img1}
            objectFit="cover"
            alt="bg"
            layout="fill"
            style={{
              objectPosition: "center",
              objectFit: "cover",
            }}
          /> */}
        </Box>
      </Grid>
    </Grid>
  );
};

Register.layout = "Blank";
export default Register;
