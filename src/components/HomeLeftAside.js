import { Card } from "@mui/material";
import React from "react";
import { EntryCard } from "./default";
const style = {
  first: { bgColor: "white", minHeight: "209px", mb: "1rem", padding: "20px" },
  sec: { bgColor: "white", minHeight: "319px" },
};

export default function () {
  return (
    <>
      <section>
        <EntryCard style={style.first} />
      </section>
      <section>
        <Card sx={style.sec}></Card>
      </section>
    </>
  );
}
