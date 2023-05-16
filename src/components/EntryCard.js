import React from "react";
import { Card, Typography as H6 } from "@mui/material";

export default function EntryCard({ style }) {
  return (
    <Card sx={style}>
      <H6 variant="h6">Latest Entry</H6>
    </Card>
  );
}
