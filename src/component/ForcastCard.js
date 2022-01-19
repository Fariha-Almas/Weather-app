import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";

function ForcastCard() {
  return (
    <div
      style={{
        background: "aliceblue",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        width: "7vw",
      }}
    >
      <h3>15C</h3>
      <p>
        temp <br /> temp3
      </p>
    </div>
  );
}

export default ForcastCard;
