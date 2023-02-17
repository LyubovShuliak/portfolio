import { ListItemText, Theme } from "@mui/material";

import { FC } from "react";

const ContactItemComponent: FC<{
  theme: Theme;

  text: string;
}> = ({ theme, text }) => {
  return (
    <ListItemText
      primary={text}
      sx={{
        maxWidth: "400px",
        color: "white",
        ".MuiTypography-root": {
          fontFamily: "AppBar",
          [theme.breakpoints.between("sm", "md")]: {
            fontSize: "18px",
          },
          [theme.breakpoints.up("md")]: {
            fontSize: "20px",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
          },
          fontWeight: "bold",
        },
      }}
    />
  );
};

export default ContactItemComponent;
