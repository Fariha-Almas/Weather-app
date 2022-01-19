import React, { useEffect } from "react";
// import Forcast from "../assets/rainy-day.png";
import Thunder from "../assets/thunder.jpg";
import { Button, Grid, makeStyles } from "@material-ui/core";

export default function Card() {
  // useEffect =
  //   (() => {
  //     //   axios.get('https://api.github.com/users/mapbox')
  //     // .then((response) => {
  //     //   console.log( " --response of the api --",response.data);
  //     // });
  //   },
  //   []);
  return (
    <div>
      <Grid container>
        <Grid
          // style={{ backgroundColor: "pink" }}
          item
          xs={2}
          sm={2}
          md={3}
          lg={3}
        ></Grid>
        <Grid
          style={{
            backgroundColor: "aliceblue",
            display: "flex",
            flexDirection: "row",
          }}
          item
          xs={2}
          sm={2}
          md={6}
          lg={6}
        >
          <Grid
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              // backgroundImage: `url(${Thunder})`,
            }}
            item
            // xs={2}
            // sm={2}
            md={4}
            lg={4}
          >
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "0px",
              }}
            >
              <div>
                <h2> Sunday</h2>
                <p>
                  May 16th <br /> kflgkld <br />
                  Berlin{" "}
                </p>
              </div>
              <div>
                <h2>15 C</h2>
                <p>light rain</p>
              </div>
            </div>
          </Grid>
          <Grid
            style={{
              backgroundColor: "pink",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "20px",
            }}
            item
            // xs={2}
            // sm={2}
            md={8}
            lg={8}
          >
            {" "}
            <p>
              {" "}
              Humidity <br /> Wind Speed{" "}
            </p>
            <p>
              {" "}
              Humidity <br /> Wind Speed{" "}
            </p>
          </Grid>
        </Grid>
        <Grid
          // style={{ backgroundColor: "gray" }}
          item
          xs={2}
          sm={2}
          md={6}
          lg={3}
        ></Grid>
      </Grid>
    </div>
    // <Grid
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     backgroundColor: "cadetblue",
    //   }}
    // >
    //   <img src={Thunder} />
    //   <div style={{ display: "flex", flexDirection: "column" }}>
    //     <div style={{ backgroundColor: "pink" }}> het</div>
    //     <div style={{ backgroundColor: "gray" }}>djksjl</div>
    //   </div>
    // </Grid>
  );
}
