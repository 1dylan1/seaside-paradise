

import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, useMediaQuery } from '@mui/material';
import { useState, useEffect } from "react";
import logo from "../assets/seaside_resort.png";
import transLogo from "../assets/Seaside_Paradise_trans.png";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

  const [mobileView, setMobileView] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:1171px)');
  const RemoveLogo = useMediaQuery('(max-width: 610px)');

  useEffect(() => {
    setMobileView(isMobile);
  }, [isMobile]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigate = (path: string) => {
    console.log("handling nav at " + path);
    navigate(path);
  }

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
      <List>
        <ListItem><Button href="#home" color="inherit">Home</Button></ListItem>
        <ListItem><Button href="#rooms" color="inherit">Rooms</Button></ListItem>
        <ListItem><Button href="#amenities" color="inherit">Amenities</Button></ListItem>
        <ListItem><Button href="#contact" color="inherit">Contact</Button></ListItem>
      </List>
    </Drawer>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "rgba(0,0,0,0)", boxShadow: "none", margin: "0 auto", marginTop: RemoveLogo ? "0px" : "0px"}}>
        <Toolbar sx={{ marginTop: "24px" }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {RemoveLogo ? null : <img style={{ height: "120px", cursor: "pointer" }} alt="logo" src={logo} onClick={() => handleNavigate("/")} />}
            <img style={{height: "70px", cursor: "pointer", marginTop: RemoveLogo ? "10px" : "15px"}} alt="transLogo" src={transLogo}/>
          </div>
          <div style={{ flexGrow: 1 }} />
          {mobileView ? (
            <>
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{marginRight: "24px;"}}>
                <MenuIcon sx={{fontSize: "40px"}} />
              </IconButton>
              {drawer}
            </>
          ) : (
            <>
              <Button sx={{fontWeight: "bold", fontSize: "1rem", marginRight: "48px;"}} href="#home" color="inherit">Home</Button>
              <Button sx={{fontWeight: "bold", fontSize: "1rem", marginRight: "48px;"}} href="#rooms" color="inherit">Rooms</Button>
              <Button sx={{fontWeight: "bold", fontSize: "1rem", marginRight: "48px;"}} href="#amenities" color="inherit">Amenities</Button>
              <Button sx={{fontWeight: "bold", fontSize: "1rem"}} href="#contact" color="inherit">Contact</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}