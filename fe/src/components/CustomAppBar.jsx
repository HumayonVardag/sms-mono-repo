import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import PROFILE_ELEMENTS from "../constants/profileElements";
import { ListItemButton } from "@mui/material";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const CustomAppBar = ({ onSideBarComponentChange }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position='static'
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        backgroundColor: "white",
        color: "black",
        zIndex: 10,
      }}>
      <Toolbar>
        <Container maxWidth='l' disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
              }}>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant='h6'
                noWrap
                component='a'
                href='#app-bar-with-responsive-menu'
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}>
                LOGO
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={() => {}}
                color='inherit'>
                <MenuIcon />
              </IconButton>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" } }} />
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='#app-bar-with-responsive-menu'
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {PROFILE_ELEMENTS.map((current) => (
                  <MenuItem key={current.id} onClick={handleCloseUserMenu}>
                    <ListItemButton
                      onClick={() =>
                        onSideBarComponentChange({
                          id: current.id,
                          eventDispatcher: "appbar",
                        })
                      }>
                      <Typography sx={{ textAlign: "center" }}>
                        {current.label}
                      </Typography>
                    </ListItemButton>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
