// noinspection JSValidateTypes

import React, {useEffect, useState} from "react";
import {Doughnut, Pie} from "react-chartjs-2";
import {ArcElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from "chart.js";

// this is plugin of chart.js without defination of globally chart.js show the error
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// eslint-disable-next-line no-unused-vars

const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    tooltip: {
      displayColor: true,
      backgroundColor: "#fff",
      bodyColor: "#000",
      borderColor: "#000",
      borderWidth: 1,
      padding: 10,
      titleColor: "#000",
      titleFont: "bold",
      titleFontSize: 30,
      yAlign: "bottom",
    },
    // legend hamara data show karne k button show karta hai
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Chart.js Doughnut Chart Sample Practice",
    },
  },
};
const DoughNut = () => {
  const [data, setData] = useState({
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  });
  useEffect(() => {
        console.log("Doughnut");
        const fetchData = () => {
          fetch("https://jsonplaceholder.typicode.com/users?_start=4&_end=10")
              .then((data) => {
                return data.json();
              })
              .then((res) => {
                console.log("ressss", res);
                const label = [];
                const data = [];
                for (const i of res) {
                  label.push(i.name);
                  data.push(i.id);
                }
                setData({
                  labels: label,
                  datasets: [
                    {
                      label: "My First Dataset",
                      data: data,
                      backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
                      ],
                      hoverOffset: 4,
                    },
                  ],
                });
              })
              .catch((e) => {
                console.log("error", e);
              });
        };
        fetchData();
      },
      []);
  return (
    <div >
      <Pie data={data} options={options}/>
      <Doughnut data={data} options={options}/>
    </div>
  );
};

export default DoughNut;
