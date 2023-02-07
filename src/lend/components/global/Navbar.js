import {
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationAddOutlined,
  PersonOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { useAuthStore } from "../../../hooks/useAuthStore";
export const Navbar = () => {
  const { startLogout } = useAuthStore();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
          <IconButton>
            <NotificationAddOutlined />
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
          <IconButton>
            <PersonOutlined
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem onClick={startLogout}>Logout</MenuItem>
            </Menu>
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
