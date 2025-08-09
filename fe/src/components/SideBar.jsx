import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SIDEBAR_COMPONENTS from "../constants/sideBarElements";

const drawerWidth = 200;

const SideBar = ({ onSideBarComponentChange }) => {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "transparent !important",
        },
      }}>
      <Toolbar />
      <Box sx={{ marginTop: "20px" }}>
        <List>
          {SIDEBAR_COMPONENTS.map((current) => (
            <ListItem key={current.id} disablePadding>
              <ListItemButton
                onClick={(e) => {
                  onSideBarComponentChange({
                    id: current.id,
                    eventDispatcher: "sidebar",
                  });
                }}>
                <ListItemIcon>{<InboxIcon />}</ListItemIcon>
                <ListItemText primary={current.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
