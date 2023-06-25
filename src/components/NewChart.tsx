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
import {Chart} from "react-charts";
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



export const NewChart = observer(() => {
    const { globalEnvData, globalSettings } = useStore();
    const labels = Object.keys(globalEnvData.getItemByTitle(globalSettings.currentAreaTitle).history);

    const data = {
        labels:Object.keys(globalEnvData.getItemByTitle(globalSettings.currentAreaTitle).history),
        datasets: [
            {
                label: 'Влажность воздуха',
                data: labels.map((key) => {
                    return globalEnvData.data[globalSettings.currentAreaTitle].history[key].airHumidity
                }),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Скорость ветра',
                data: labels.map((key) =>{
                    return globalEnvData.data[globalSettings.currentAreaTitle].history[key].windSpeed
                } ),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Осадки',
                data: labels.map((key) =>{
                    return globalEnvData.data[globalSettings.currentAreaTitle].history[key].precipitation
                } ),
                backgroundColor: 'rgba(20,77,2,0.5)',
            },
        ],
    };

    return (<div style={{width:100+'%',height:70+'%'}}>
        <Bar options={options} data={data} />
    </div>)
})
