import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

export default function ProjectItemComponent() {
  const theme = useTheme();

  const textStyle = {
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  };
  const titleStyle = {
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  };
  const buttonStyle = {
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  };
  const size = {
    [theme.breakpoints.between("sm", "md")]: {
      width: "85vw",
      height: "400px",
      maxHeight: "40vh",
    },
    [theme.breakpoints.up("md")]: {
      width: 345,
      height: 400,
    },
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      maxHeight: "60vh",
    },
  };
  return (
    <Card
      sx={{
        margin: "auto",
        backgroundColor: "rgba(40, 18, 174, 0.5)",
        borderRadius: "25px",
        ...size,

        boxShadow: "none",
      }}
    >
      <CardMedia
        sx={{
          [theme.breakpoints.between("sm", "md")]: {
            height: "60%",
          },
          [theme.breakpoints.up("md")]: {
            height: "200px",
          },
          [theme.breakpoints.down("sm")]: {
            height: "30vh",
          },
          backgroundSize: "contain",
        }}
        title="green iguana"
        image={require("../../assets/images/icons/Intersect.png")}
      />

      <CardContent sx={{}}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            textAlign: "left",
            color: "white",
            fontWeight: "bold",
            ...titleStyle,
          }}
        >
          Converter
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "left", color: "white", ...textStyle }}
        >
          Using this app you can convert currency or get list of currencies
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        }}
      >
        <Button
          size="small"
          sx={{ color: "#F7647E", fontWeight: "bold", ...buttonStyle }}
        >
          Open in browser
        </Button>
        <Button
          size="small"
          sx={{
            color: "rgba(40, 18, 174)",
            fontWeight: "bold",
            ...buttonStyle,
          }}
        >
          Open on Github
        </Button>
      </CardActions>
    </Card>
  );
}
