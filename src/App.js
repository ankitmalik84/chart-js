import React, { Component } from "react";
import BarChart from "./component/BarChart";
import Doughnut from "./component/Doughnut";
const App = () => {
  return (
    <>
      <BarChart />;
      <div style={{ width: "500px" }}>
        <Doughnut />;
      </div>
    </>
  );
};

export default App;
