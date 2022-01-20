import React, { useEffect, useState } from "react";
// import Forcast from "../assets/rainy-day.png";
import Thunder from "../assets/thunder.jpg";
import { Button, Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import ForcastCard from "./ForcastCard";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  wrap: {
    [theme.breakpoints.down("lg")]: {
      // display: "none",
      flexWrap: "wrap",
    },
  },
}));

export default function Card() {
  const classes = useStyles();
  const [today, setToday] = useState();
  const [forcastData, setForcastData] = useState();

  useEffect(() => {
    axios
      .post(
        "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=7bb146e83da9de119d8e785fdd490228"
      )
      .then(
        (response) => {
          // console.log("-- response --", response.data);
          setToday(response.data);
          // const numberBeforeDecimal = parseInt(today?.main?.temp_max);
          // console.log("--jimin--", numberBeforeDecimal);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  const temp = parseInt(today?.main?.temp_max);
  useEffect(() => {
    axios
      .post(
        "https://api.openweathermap.org/data/2.5/forecast?q=Paris&appid=7bb146e83da9de119d8e785fdd490228"
      )
      .then(
        (response) => {
          // console.log("-- weather -f-", response.data.list);
          let forcastList = response?.data?.list;
          var data = forcastList.slice(1, 6);
          setForcastData(data);
          console.log("--jimin--", forcastData);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <div>
      <Grid container>
        <Grid
          style={{ backgroundColor: "green" }}
          item
          xs={2}
          sm={3}
          md={3}
          lg={3}
          className={classes.right}
        ></Grid>
        <Grid
          style={{
            backgroundColor: "blue",
            display: "flex",
            flexDirection: "row",
          }}
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
        >
          <Grid
            style={{
              backgroundColor: "honeydew",
              paddingTop: "20px",
              paddingBottom: "20px",
              // backgroundImage: `url(${Thunder})`,
            }}
            item
            xs={4}
            sm={4}
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
                  {today?.name}{" "}
                </p>
              </div>
              <div>
                <h2>{temp} F</h2>
                <p>{today?.weather[0]?.description}</p>
              </div>
            </div>
          </Grid>
          <Grid
            style={{
              backgroundColor: "red",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "20px",
            }}
            item
            xs={8}
            sm={8}
            md={8}
            lg={8}
          >
            <Grid
              style={{
                backgroundColor: "green",
                display: "flex",
                justifyContent: "space-between",
              }}
              item
              // xs={2}
              // sm={2}
              md={12}
              lg={12}
            >
              {" "}
              <p>
                {" "}
                Max temp
                <br /> Min temp
                <br /> Humidity <br /> Pressure <br /> Wind speed
              </p>
              <p>
                {" "}
                {today?.main?.temp_max} <br /> {today?.main?.temp_min} <br />{" "}
                {today?.main?.humidity} <br /> {today?.main?.pressure} <br />{" "}
                {today?.wind?.speed}
              </p>
            </Grid>

            <Grid
              className={classes.wrap}
              style={{
                backgroundColor: "greenyellow",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                // flexWrap: "wrap",
              }}
              item
              // xs={2}
              // sm={2}
              md={12}
              lg={12}
            >
              {forcastData?.map((item, index) => (
                <Link
                  to="/forcast"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <ForcastCard item={item} />
                </Link>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{ backgroundColor: "gray" }}
          item
          xs={2}
          sm={3}
          md={3}
          lg={3}
          className={classes.right}
        ></Grid>
      </Grid>
    </div>
  );
}
