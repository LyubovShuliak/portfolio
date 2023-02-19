import { Box, Button, CardMedia, Typography } from "@mui/material";
import React, { FC } from "react";
import NexIcon from "../../assets/images/icons/left.svg";

export function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Typography
      onClick={onClick}
      sx={{
        position: "absolute",
        width: "30px",
        transform: "translate(0, -50%)",
        top: "50%",
        zIndex: 2,
        height: "20px",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          backgroundColor: "transparent",
        }}
        image={require("../../assets/images/icons/left.png")}
        alt="Live from space album cover"
      />
    </Typography>
  );
}

export function PrevArrow(props: any) {
  const { onClick } = props;

  return (
    <Typography
      onClick={onClick}
      sx={{
        position: "absolute",
        width: "30px",
        transform: "translate(0, -50%)",
        top: "50%",
        right: "0px",
        height: "20px",
        zIndex: 2,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          backgroundColor: "transparent",
          width: "30px",
        }}
        image={require("../../assets/images/icons/right.png")}
        alt="Live from space album cover"
      />
    </Typography>
  );
}
