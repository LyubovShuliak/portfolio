import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { navItems } from "../../App";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export function HeaderComponent(props: Props) {
  const route = useLocation();
  const matchesLaptop = useMediaQuery("(min-width:1024px)");
  const theme = useTheme();
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Button onClick={() => navigate("/")}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Shuliak Liubov
        </Typography>
      </Button>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} href={`/${item}`}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  useEffect(() => {
    if (route.pathname.slice(1)) {
      setSelectedButton(navItems.indexOf(route.pathname.slice(1)));
    } else {
      setSelectedButton(navItems.length);
    }
  }, [route]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          "&.MuiAppBar-root": {
            backgroundColor: "rgba(144, 217, 240, 0.33)",
            boxShadow: "none",
          },
          [theme.breakpoints.down("sm")]: {
            height: "56px",
          },
          [theme.breakpoints.up("sm")]: {
            height: "75px",
          },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            sx={{ paddingLeft: "4vw", fontFamily: "AppBar", flexGrow: 1 }}
            onClick={() => {
              navigate("/");
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                color: "#4BEBC6",
                textAlign: "left",
                fontSize: `${matchesLaptop ? "25px" : "18px"}`,
                fontFamily: "AppBar",
              }}
            >
              Shuliak Liubov
            </Typography>
          </Button>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, i) => {
              let color: string;
              switch (i) {
                case 0:
                  color = "rgba(11, 77, 86, 0.94)";
                  break;
                case 1:
                  color = "#F7647E";
                  break;
                case 2:
                  color = "rgba(40, 18, 174, 0.5)";
                  break;

                default:
                  color = "black";
                  break;
              }
              return (
                <Button
                  key={item}
                  sx={{
                    color: color,
                    padding: "20px 3vw",
                    fontSize:
                      selectedButton === i
                        ? `${matchesLaptop ? "25px" : "18px"}`
                        : `${matchesLaptop ? "23px" : "15px"}`,
                    fontFamily: "AppBar",
                    textTransform: "uppercase",
                    transition: ".9s",
                  }}
                  onClick={() => {
                    navigate(`/${item}`);

                    setSelectedButton(i);
                  }}
                >
                  {selectedButton === i ? `< ${item} />` : item}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ backgroundColor: "rgba(144, 217, 240, 0.33)", height: 70 }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            backgroundColor: "rgba(144, 217, 240, 0.21)",
            ".MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgba(144, 217, 240, 0.78)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
