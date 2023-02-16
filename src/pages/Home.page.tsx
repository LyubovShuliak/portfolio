import {
  Box,
  CardMedia,
  IconButton,
  Paper,
  Stack,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const HomePage = () => {
  const matchesLaptop = useMediaQuery("(min-width:1024px)");
  const theme = useTheme();
  return (
    <Stack
      sx={{
        marginTop: "75px",
        height: "calc(100% - 75px)",
        width: "100%",
        backgroundColor: "rgba(27, 16, 97, 0.49)",
      }}
      direction={{
        xs: !matchesLaptop ? "column" : "row",
        sm: !matchesLaptop ? "column" : "row",
      }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: matchesLaptop ? "50%" : "100%",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          justifyItems: "center",
        }}
      >
        <CardContent>
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontFamily: "AppBar",
              fontSize: "5vw",
              verticalAlign: "center",
              color: "white",
              textAlign: "left",
            }}
          >
            Hi! I am
          </Typography>
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontFamily: "AppBar",
              fontSize: "5vw",
              verticalAlign: "center",
              color: "white",
              textAlign: "left",
            }}
          >
            Shuliak Liubov,
          </Typography>
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontFamily: "AppBar",
              fontSize: "5vw",
              verticalAlign: "center",
              color: "white",
              textAlign: "left",
            }}
          >
            fullstack developer
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: "45%",
          minWidth: "250px",
          "&.MuiCardMedia-img": {
            objectFit: "contain",
            alignSelf: "center",
          },
        }}
        image={require("../assets/images/photo.png")}
        alt="Live from space album cover"
      />
    </Stack>
  );
};

export default HomePage;
