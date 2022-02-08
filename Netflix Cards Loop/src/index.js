import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Cards";
import SeriesData from "./SeriesData";


ReactDOM.render(
  <>
    <h1 className="heading">List of Top 5 Netflix Series</h1>
    {SeriesData.map((value) => {
      return (
        <Card
          title={value.title}
          imgsrc={value.imgsrc}
          sname={value.sname}
          link={value.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
