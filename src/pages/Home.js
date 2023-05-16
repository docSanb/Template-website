import { Box as Div } from "@mui/material";
import React from "react";
import { rcenter } from "../utils";
import {
  HomeRightAside,
  HomeLeftAside,
  HomeTimeLine,
} from "../components/default";

const style = {
  sec: { width: "45%", marginInline: "20px" },
  container: {
    ...rcenter,
    padding: "30px 20px 20px",
    minHeight: "500px",
    alignItems: "flex-start",
    bgcolor: "rgba(245, 245, 250, 1)",
  },
  first: { width: "24%" },
  third: { width: "24%" },
};

export default function Home() {
  return (
    <Div sx={style.container} component="main">
      <Div sx={style.first} component="aside">
        <HomeLeftAside />
      </Div>

      <Div sx={style.sec} component="section" aria-label="timeline feed">
        <HomeTimeLine />
      </Div>

      <Div sx={style.third} component="aside">
        <HomeRightAside />
      </Div>
    </Div>
  );
}
