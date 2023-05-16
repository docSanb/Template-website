import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, IconButton } from "@mui/material";
import { center, rcenter } from "../utils";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const style = {
  h1: { fontSize: "23px", color: "blue", margin: 0 },
  container: { display: "flex", width: "100%", borderBottom: "1px solid gray", position: 'sticky', top:'0', background: 'white' },
  hc: { ml: "1rem", mr: "1rem", ...center },
  bc: { ...rcenter, width: "100%", justifyContent: "end" },
  nav: { width: "100%" },
};

export default function Navbar() {
  const [tab, setTab] = useState("/");
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate(tab);
  }, [tab]);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={style.container} component="header">
      <Box sx={style.hc}>
        <h1 style={style.h1}>BlueStar</h1>
      </Box>
      <Box sx={style.nav} component="nav" aria-label="primary">
        <Tabs
          value={tab}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="/" label="Home" />
          <Tab value="./logbook" label="Logbook" />
          <Tab value="./medications" label="Medications" />
          <Tab value="./healthinfo" label="HeathInfo" />
          <Tab value="./recources" label="Recources" />
        </Tabs>
      </Box>
      <Box sx={style.bc} component="nav" aria-label="secondary">
        <Button sx={{ mr: "1rem" }} variant="outlined">
          Add Entry
        </Button>
        <IconButton color="primary" sx={{ mr: "1rem" }}>
          <MailOutlineIcon />
        </IconButton>
        <Avatar sx={{ mr: "1rem" }}>SA</Avatar>
      </Box>
    </Box>
  );
}
