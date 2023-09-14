import * as React from "react";
import { useNavigate, Link, useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import MediaQuery, { useMediaQuery } from "react-responsive";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import GavelSharpIcon from "@mui/icons-material/GavelSharp";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

const navItems = ["Home", "Feed", "Research", "Probono"];

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function NavBar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const [state, setState] = React.useState({
      right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 2,
          }}
        >
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle
              sx={{
                height: 60,
                width: 60,
              }}
            />
          </IconButton>
            <Typography variant="h6" component="div"
                sx={{
                    fontWeight: 700,
                    mb: 1,
                }}
            >
                Hatim Sawai
            </Typography>
            <Typography variant="body2" component="div"
                sx={{
                    opacity: 0.6,
                    fontSize: "0.8rem",
                    textAlign: "center",
                    mb: 2,
                    width: "80%",
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, tempore.
            </Typography>
        </Box>
        <Divider />
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
            }}
        >
        <List>
          <ListItem key="Dashboard" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SpaceDashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem key="Edit Profile" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EditNoteRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Edit Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem key="Chat" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChatRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
            <ListItem key="Logout" disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <LogoutOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </ListItem>
        </List>
        </Box>
      </Box>
    );
    return (
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar
            component="nav"
            color=""
            sx={
              {
                // boxShadow: "none",
                backgroundColor: "var(--bg-color)",
              }
            }
          >
            <Toolbar>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {navItems.map((item) => (
                    <MenuItem key={item} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{item}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                NYAY
              </Typography>
              <GavelSharpIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                NYAY
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: "#000",
                      fontWeight: 700,
                      textTransform: "none",
                      mr: 2,
                      "&:hover": {
                        borderBottom: "3px solid #000",
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
              <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
                onClick={toggleDrawer("right", true)}
              >
                <AccountCircle
                  sx={{
                    height: 40,
                    width: 40,
                  }}
                />
              </IconButton>
              <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar id="back-to-top-anchor" />
        <Container></Container>
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    );
}