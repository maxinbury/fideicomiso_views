import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../recursos/marcas.png";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerNav from "./DrawerNav";

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const islogo = {
                  width: "100px",                  
                  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/registro");
  };
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#Primary" }}>
        <Toolbar>
            <img style={islogo} src={logo} alt="logo" />
          {isMatch ? (
            <>
              <DrawerNav />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="Secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Inicio" />
                <Tab label="Nosotros" />
                <Tab label="Contacto" />
                <Tab label="Ayuda" />
              </Tabs>
              <Button onClick={handleClick} sx={{ marginLeft: "auto" }} variant="contained">
                Ingresar
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                Registrarse
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
