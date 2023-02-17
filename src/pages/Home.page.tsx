import { Box, CardMedia, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

const HomePage = () => {
  const matchesLaptop = useMediaQuery("(min-width:1024px)");
  const theme = useTheme();
  return (
    <Stack
      sx={{
        width: "100%",
        marginTop: "30px",
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
          width: "40%",
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
