import { Box, Button, CardMedia, Grid, Paper, styled } from "@mui/material";
import React from "react";
import Image from "../assets/images/contacts.png";

import contactsStyles from "./contacts.module.css";

const ContactsPage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box
      sx={{
        marginTop: "75px",
        padding: "100px 200px",
        position: "relative",
      }}
    >
      <Grid container spacing={2} sx={{ zIndex: 2 }}>
        <a href={require("../assets/CV_Shuliak_Liubov.pdf")} download>
          CV
        </a>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactsPage;
