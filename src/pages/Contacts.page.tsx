import {
  Box,
  Button,
  CardMedia,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
  useTheme,
} from "@mui/material";

import { GitHub, ContentCopy } from "@mui/icons-material";
import ContactItemComponent from "../components/contact/ContactItemText.component";

const ContactsPage = () => {
  const theme = useTheme();

  const iconResponsive = {
    [theme.breakpoints.between("sm", "md")]: {
      width: 20,
      height: 20,
    },
    [theme.breakpoints.up("md")]: {
      width: 30,
      height: 30,
    },
    [theme.breakpoints.down("sm")]: {
      width: 12,
      height: 12,
    },
  };
  const iconWidth = {
    [theme.breakpoints.between("sm", "md")]: {
      minWidth: 30,
    },
    [theme.breakpoints.up("md")]: {
      minWidth: 40,
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: 15,
    },
  };

  const copyContent = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Box
      sx={{
        marginTop: "75px",
        padding: "10vh 10vw",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(144, 217, 240, 0.33)",
          display: "flex",
          maxWidth: "900px",
          minWidth: "200px",
        }}
      >
        <List dense>
          <ListItem>
            <Tooltip title="Go to Telegram" placement="top">
              <ListItemButton href="https://t.me/Lyubov9811" target={"_blank"}>
                <ListItemIcon
                  sx={{
                    ...iconWidth,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      ...iconResponsive,
                      backgroundColor: "transparent",
                    }}
                    image={require("../assets/images/icons/telegram.png")}
                    alt="Live from space album cover"
                  />
                </ListItemIcon>
                <ContactItemComponent theme={theme} text={"Telegram"} />
              </ListItemButton>
            </Tooltip>

            <Tooltip title="Copy telegram name" placement="right">
              <Button
                onClick={() => copyContent("@Lyubov9811")}
                startIcon={<ContentCopy sx={{ color: "black" }} />}
              ></Button>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip title="Send mail" placement="top">
              <ListItemButton
                href="https://mail.google.com/mail/u/1/?view=cm&to=shuliak.lyubov@gmail.com"
                target={"_blank"}
              >
                <ListItemIcon
                  sx={{
                    ...iconWidth,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      ...iconResponsive,
                      backgroundColor: "transparent",
                    }}
                    image={require("../assets/images/icons/gmail.png")}
                    alt="Live from space album cover"
                  />
                </ListItemIcon>
                <ContactItemComponent
                  theme={theme}
                  text={"shuliak.lyubov@gmail.com"}
                />
              </ListItemButton>
            </Tooltip>
            <Tooltip title="Copy email address" placement="right">
              <Button
                startIcon={<ContentCopy sx={{ color: "black" }} />}
                onClick={() => copyContent("shuliak.lyubov@gmail.com")}
              ></Button>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip title="Download CV" placement="top">
              <ListItemButton
                href={require("../assets/CV_Shuliak_Liubov.pdf")}
                download="CV_Shuliak_Liubov"
              >
                <ListItemIcon
                  sx={{
                    ...iconWidth,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      ...iconResponsive,
                      backgroundColor: "transparent",
                    }}
                    image={require("../assets/images/icons/download.png")}
                    alt="Live from space album cover"
                  />
                </ListItemIcon>
                <ContactItemComponent theme={theme} text={"CV"} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip title="Go to Linkedin" placement="top">
              <ListItemButton
                href="https://www.linkedin.com/in/shuliaklyubov/"
                target={"_blank"}
              >
                <ListItemIcon
                  sx={{
                    ...iconWidth,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      ...iconResponsive,
                      backgroundColor: "transparent",
                    }}
                    image={require("../assets/images/icons/linkedin.png")}
                    alt="Live from space album cover"
                  />
                </ListItemIcon>
                <ContactItemComponent theme={theme} text={"LinkedIn"} />
              </ListItemButton>
            </Tooltip>
            <Tooltip title="Copy Linkedin link" placement="right">
              <Button
                startIcon={<ContentCopy sx={{ color: "black" }} />}
                onClick={() =>
                  copyContent("https://www.linkedin.com/in/shuliaklyubov/")
                }
              ></Button>
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip title="Go to Github" placement="top">
              <ListItemButton
                href="https://github.com/LyubovShuliak"
                target={"_blank"}
              >
                <ListItemIcon
                  sx={{
                    ...iconWidth,
                  }}
                >
                  <GitHub
                    sx={{
                      ...iconResponsive,
                    }}
                  />
                </ListItemIcon>
                <ContactItemComponent theme={theme} text={"GitHub"} />
              </ListItemButton>
            </Tooltip>
            <Tooltip title="Copy Github link" placement="right">
              <Button
                startIcon={<ContentCopy sx={{ color: "black" }} />}
                onClick={() => copyContent("https://github.com/LyubovShuliak")}
              ></Button>
            </Tooltip>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ContactsPage;
