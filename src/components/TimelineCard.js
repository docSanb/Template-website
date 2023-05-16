import { Box as Div, Card } from "@mui/material";
import React from 'react'
const style = {
  card: {
    display: "flex",
    padding: "20px",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  h5: {
    fontWeight: "bolder",
    fontSize: "18px",
    margin: 0,
  },
  para: {
    margin: 0,
    fontSize: "14px",
    lineHeight: "24px",
    marginRight: ".5rem",
  },
  sec: {
    backgroundColor: "lightgray",
    minWidth: "80px",
    height: "60px",
  },
};

export default function TimelineCard({ data }) {
  return (
    <Card
          key={data.title}
          sx={{
            ...style.card,
            bgcolor: data?.type === "ad" ? "rgba(115, 176, 58, 1)" : "white",
            color: data?.type === "ad" && "white",
          }}
        >
          <Div>
            <h5 style={style.h5}>{data.title}</h5>
            <p style={style.para}>{data.para}</p>
            <a href="#">{data.linkTitle}</a>
          </Div>
          <Div sx={style.sec}></Div>
        </Card>
  )
}
