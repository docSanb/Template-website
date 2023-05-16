import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { center, rcenter } from "../utils";
const style = {
  first: { bgColor: "white", minHeight: "241px", mb: "1rem" },
  sec: { bgColor: "white", padding: '20px'},
  item: {
    ...center,
    justifyContent: "flex-start",
    marginBottom: "25px",
  },
  img: { height: "86px", width: "100%", objectFit: "cover" },
  h6: {
    fontSize: "18px", margin: '5px'
  },
  p: { fontSize: "15px", margin: '5px' },
  h5: { ...rcenter, paddingBottom: "20px", fontSize: "20px", margin:0}
};

const food = [
  {
    title: "chicken salad",
    details: "Carbs: 14g Calories: 134",
    src: "https://healthyfitnessmeals.com/wp-content/uploads/2021/04/Southwest-chicken-salad-7-500x500.jpg",
  },
  {
    title: "Tomato-&-Olive-Stuffed",
    details: "Carbs: 14g Calories: 134",
    src: "https://foodhub.scene7.com/is/image/woolworthsltdprod/1908-stuffed-tomatoes-with-cheese-and-olives:Square-1300x1300",
  },
];

//stand alone component
export default function HomeRightAside() {
  return (
    <>
      <Card sx={style.first}></Card>
      <Card sx={style.sec} component="section">
        <Typography
          sx={style.h5}
          gutterBottom
          variant="h5"
        >
          New Ideas for Dinner
        </Typography>
        <>
          {food.map((item) => (
            <div style={style.item} key={item.title}>
              <img style={style.img} src={item.src} alt={item.title} />
              <h6 style={style.h6}>{item.title}</h6>
              <p style={style.p}>{item.details}</p>
            </div>
          ))}
        </>
      </Card>
    </>
  );
}
