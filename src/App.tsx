import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

import { useNavigate, useLocation, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Domů</Typography>
      {[...Array(4)].map((_, i) => (
        <img
          key={i}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          alt="Domácí prostředí"
          style={{ marginTop: "1rem", maxWidth: "100%", borderRadius: 8 }}
        />
      ))}
    </Box>
  );
}

function Profile() {
  const handleClick = () => {
    alert("Klikol si na tlačidlo!");
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Profil</Typography>
      <Button variant="contained" color="primary" onClick={handleClick} sx={{ mt: 2 }}>
        Klikni ma
      </Button>
    </Box>
  );
}

function Settings() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Nastavení</Typography>
    </Box>
  );
}

const drawerWidth = 240;
const collapsedWidth = 64;

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedKey, setSelectedKey] = useState(location.pathname);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  const menuItems = [
    { key: "/", icon: <HomeIcon />, text: "Domů" },
    { key: "/profile", icon: <PersonIcon />, text: "Profil" },
    { key: "/settings", icon: <SettingsIcon />, text: "Nastavení" },
  ];

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleCollapse}
            sx={{ mr: 2 }}
            aria-label={collapsed ? "Rozbaliť menu" : "Zbaliť menu"}
          >
            <MenuIcon />
          </IconButton>
          <img
            src="https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg"
            alt="SAP Logo"
            height={30}
            style={{ marginRight: 16 }}
          />
          <Typography variant="h6" noWrap component="div">
            Moje Fiori Appka
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer / Sidebar */}
      <Drawer
        variant="permanent"
        open
        sx={{
          width: collapsed ? collapsedWidth : drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: collapsed ? collapsedWidth : drawerWidth,
            boxSizing: "border-box",
            transition: "width 0.3s",
            overflowX: "hidden",
            borderRight: "1px solid #ccc",
          },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map(({ key, icon, text }) => (
            <ListItem key={key} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                selected={selectedKey === key}
                onClick={() => navigate(key)}
                sx={{
                  justifyContent: collapsed ? "center" : "flex-start",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: collapsed ? "auto" : 3,
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                {!collapsed && <ListItemText primary={text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f5f6f7",
          p: 3,
          overflowY: "auto",
          marginLeft: 0,
          transition: "margin-left 0.3s",
          height: "100vh",
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Box>
    </Box>
  );
}
