import React, { useState, useEffect } from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import axios from "axios";

function ForcastCard({ item }) {
  // console.log("--items in forcast card--", item);
  return (
    <div>
      <Grid container>
        <Grid>
          <Grid
            style={{
              background: "aliceblue",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              // width: "7vw",
              paddingRight: "18px",
              paddingLeft: "18px",
            }}
          >
            <p>17 px </p>
            <p>
              temp <br /> temp3
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ForcastCard;
