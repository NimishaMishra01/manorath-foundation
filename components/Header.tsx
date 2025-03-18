"use client"
import { AppBar, Box, Button, Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const Router=useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event:any) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleRedirect = (path:any) => {
    Router.replace(path);
    handleMenuClose();
  };

  return (
    <AppBar position="static" color="default" sx={{ background: "#fff", paddingX: 2 }}>
      <Toolbar>
        {/* Logo and Title */}
        <Image src={logo} alt="Manorath Foundation Logo" width={40} height={40} />
        <Typography
          variant="h6"
          sx={{
            marginLeft: 2,
            fontWeight: "bold",
            color: "#f9a826",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "1px",
            cursor: "pointer",
            flexGrow: 1,
          }}
          onClick={() => handleRedirect("/")}
        >
          Manorath Foundation
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button onClick={() => handleRedirect("/about")} color="inherit">About Us</Button>
          <Button onClick={() => handleRedirect("/work")} color="inherit">Our Work</Button>
          <Button onClick={() => handleRedirect("")} color="inherit">Get Involved</Button>
          <Button onClick={() => handleRedirect("")} color="inherit">Contact Us</Button>
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Menu */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClick={handleMenuClose}>
          <MenuItem onClick={() => handleRedirect("/about")}>About Us</MenuItem>
          <MenuItem onClick={() => handleRedirect("/work")}>Our Work</MenuItem>
          <MenuItem onClick={() => handleRedirect("/get-involved")}>Get Involved</MenuItem>
          <MenuItem onClick={() => handleRedirect("/contact")}>Contact Us</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
