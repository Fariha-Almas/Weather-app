import React from "react";
import Weather_icon from "../assets/rainy-day.png";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
        backgroundColor: "cadetblue",
      }}
    >
      <img src={Weather_icon} style={{ height: "70px", width: "70px" }} />
      <h1 style={{ color: "#fff", marginLeft: "20px" }}>Weather App</h1>
    </div>
  );
}
