import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar, Line} from 'react-chartjs-2';
import {observer} from "mobx-react-lite";
import {useStore} from "../store/store";
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => [0,1,2,3]),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => [0,1,2,3]),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export const NewChart = observer(() => {
    const { globalEnvData, globalSettings } = useStore();


    return (<div style={{width:100+'%',height:70+'%'}}>
        <Bar options={options} data={data} />
    </div>)
})
