import {Bar} from "react-chartjs-2";
import React, {useEffect, useState} from "react";
// this is the library of the chart.js need to import
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from "chart.js";

// this is plugin of chart.js without defination of globally chart.js show the error
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
      padding:10,
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
      text: "Chart.js Horizontal Bar Chart Sample Practice",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "rgba(255,255,255,0.66)",
      },
    },
  },
  layout: {
    margin:{
      top:10,
    },
    padding: {
      top: 10,
    },
  },
};
// this data is used we practice for static data

// const labels = [
//   "Sunday",
//   "Monday",
//   "tuesday",
//   "wednesday",
//   "friday",
//   "saturday",
// ];

// const data = {
// labels,
// datasets: [
//   {
//     label: "Dataset 1",
//     data: [1, 2, 3, 4, 5, 4],
//     borderColor: "rgb(255,99,132)",
//     backgroundColor: "rgba(255,99,132,0.5)",
//   },
//   {
//     label: "Dataset 2",
//     data: [1, 2, 3, 4, 5, 3],
//     borderColor: "rgb(53,162,235)",
//     backgroundColor: "rgba(53,162,235,0.5)",
//   },
// ],
// };
const BarChart = () => {
  const [data, setData] = useState({
    labels: ["Sunday", "Monday", "tuesday", "wednesday", "friday", "saturday"],
    datasets: [
      {
        label: "",
        data: [],
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132,0.5)",
      },
      {
        label: "",
        data: [],
        borderColor: "rgb(53,162,235)",
        backgroundColor: "rgba(53,162,235,0.5)",
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://jsonplaceholder.typicode.com/comments?_start=25&_end=35";
      const dataSet1 = [];
      const dataSet2 = [];
      const label = [];
      await fetch(url)
        .then((data) => {
          console.log("Api data", data);
          return data.json();
        })
        .then((res) => {
          console.log("resss", res);
          for (const val of res) {
            dataSet1.push(val.id);
            dataSet2.push(val.postId);
            label.push(val.email);
          }
          setData({
            labels: label,
            datasets: [
              {
                label: "Dataset 1",
                data: dataSet1,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
              },
              {
                label: "Dataset 2",
                data: dataSet2,
                borderColor: "rgb(53,162,235)",
                backgroundColor: "rgba(53,162,235,0.5)",
              },
            ],
          });
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData().then(r => console.log("r", r));
  }, []);
  return (
    <div className='bg-gradient-to-t from-stone-50 to-rose-100'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
