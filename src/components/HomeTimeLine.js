import React from "react";
import { TimelineCard } from "./default";

const tiles = [
  {
    title: "Insulin Calculator Use",
    para: "You used the Insulin Calculator for less than half of your bolus insulin doses in the past week.",
    linkTitle: "Learn More",
    link: "#",
  },
  {
    title: "Get the Mobile App",
    type: "ad",
    para: "Send a download link to your phone",
  },
  {
    title: "Do you take any medication?",
    para: "Let's make sure we have your complete med list. Add all your meds, even if they aren't for diabetes",
    linkTitle: "Get Started",
    link: "#",
  },
  {
    title: "Have diabetes questions?",
    para: "Ask our team of Certified Diabetes Educators",
    linkTitle: "Get Started",
    link: "#",
  },
  {
    title: "What is your A1C?",
    para: "Record your most recent reading",
    linkTitle: "Record Now",
    link: "#",
  },
];

//stand alone component
export default function HomeTimeLine() {
  return (
    <section>
      {tiles.map((item) => (
        <TimelineCard data={item} />
      ))}
    </section>
  );
}
