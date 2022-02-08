import React from "react";
import Card from "./Cards";
import SeriesData from "./SeriesData";

const App = () => {
   return <>
    <h1 className="heading">List of Top 5 Netflix Series</h1>
    {SeriesData.map((value) => {
      return (
        <Card
          key={value.key}
          title={value.title}
          imgsrc={value.imgsrc}
          sname={value.sname}
          link={value.link}
        />
      );
    })}
  </>
}

export default App;