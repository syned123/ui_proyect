import userIcon from "../../img/user.jpg";
import { useState } from "react";
import { useAuthStore } from "../../../hooks/useAuthStore";
import { tokens } from "../../theme";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarHeader,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { CiTextAlignJustify, CiViewList, CiHome } from "react-icons/ci";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
} from "react-icons/fa";

export const Sidebar = ({
  image,
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { user } = useAuthStore();
  const [selected, setSelected] = useState("");

  const Item = ({ title, to, icon, selected, setselected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setselected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]}`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#FFFFFF !important",
        },
        "& .pro-menu-item.active": {
          color: "#97DAA2 !important",
        },
      }}
    >
      <ProSidebar
        image={image}
        collapsed={collapsed}
        toggled={toggled}
        onToggle={handleToggleSidebar}
        breakPoint="md"
      >
        <SidebarHeader>
          <Menu iconShape="circle">
            {collapsed ? (
              <MenuItem
                icon={<FaAngleDoubleRight />}
                onClick={handleCollapsedChange}
              ></MenuItem>
            ) : (
              <div>
                <div className="sidebar">
                  <div className="title">Pro Sidebar</div>
                  <div>
                    <MenuItem
                      suffix={<FaAngleDoubleLeft />}
                      onClick={handleCollapsedChange}
                    ></MenuItem>
                  </div>
                </div>
                <div className="user">
                  <img
                    src={userIcon}
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    {user.name}
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Admin
                  </Typography>
                </div>
              </div>
            )}
          </Menu>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <Item
              icon={<CiHome />}
              title="Dashboard"
              selected={selected}
              setselected={setSelected}
              to="dashboard"
            ></Item>
            <Item
              icon={<CiHome />}
              title="Usuarios"
              selected={selected}
              setselected={setSelected}
              to="user"
            ></Item>
            <Item
              icon={<CiHome />}
              title="Clientes"
              selected={selected}
              setselected={setSelected}
              to="client"
            ></Item>
            <Item
              icon={<CiHome />}
              title="Pre Aprobacion"
              selected={selected}
              setselected={setSelected}
              to="preapproval"
            ></Item>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </Box>
  );
};
