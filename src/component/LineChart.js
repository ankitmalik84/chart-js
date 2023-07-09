import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export let options;
options = {
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
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            fill: true,
            tension: 0.1,
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            tension: 0.2,
        },
        {
            label: 'Dataset 3',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(98,235,53)',
            backgroundColor: 'rgba(59,235,53,0.5)',
        },
    ],
};

export function App() {

    return (
        <div className='bg-gradient-to-t from-sky-200 to-sky-100'>
            <Line options={options} data={data} />
        </div>

);
}
export default App;
