import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// this is plugin of chart.js without defination of globally chart.js show the error
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const data = {
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
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => {
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("ressss", res);
          const label = [];
          const data = [];
          for (var i of res) {
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
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Pie data={data} />
      <Doughnut data={data} />
    </div>
  );
};

export default DoughNut;
