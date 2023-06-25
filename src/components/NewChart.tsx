import React from 'react';
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {observer} from "mobx-react-lite";
import {useStore} from "../store/store";
import {WineParams} from "../enums/WineParams";
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

const closeWindow = (gSet) => {
    gSet.showSettingPanel = false
}

export const NewChart = observer(() => {
    const { globalEnvData, globalSettings } = useStore();
    const labels = Object.keys(globalEnvData.getItemByTitle(globalSettings.currentAreaTitle).history);

    const data = {
        labels:Object.keys(globalEnvData.getItemByTitle(globalSettings.currentAreaTitle).history),
        title: 'ff',
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
                backgroundColor: 'rgba(11,17,8,0.5)',
            },
            {
                label: 'Алкоголь',
                data: labels.map((key) =>{
                    return globalEnvData.data[globalSettings.currentAreaTitle].history[key].alcohol
                } ),
                backgroundColor: 'rgba(203,171,34,0.5)',
            },
            {
                label: 'Фиксированная кислотность',
                data: labels.map((key) =>{
                    return globalEnvData.data[globalSettings.currentAreaTitle].history[key].fixed_acidity
                } ),
                backgroundColor: 'rgba(143,49,225,0.5)',
            },
            {
                label: 'Летучая кислота',
                data: labels.map((key) =>{
                    return globalEnvData.data[globalSettings.currentAreaTitle].history[key].volatile_acidity
                } ),
                backgroundColor: 'rgba(157,6,116,0.5)',
            },
            {
                label: 'Лимонная кислота',
                data: labels.map((key) =>{
                    return globalEnvData.data[globalSettings.currentAreaTitle].history[key].citric_acid
                } ),
                backgroundColor: 'rgba(239,145,218,0.5)',
            },
            {
                label: 'Остаточный сахар',
                data: labels.map((key) =>{
                    return globalEnvData.data[globalSettings.currentAreaTitle].history[key].residual_sugar
                } ),
                backgroundColor: 'rgba(232,116,26,0.5)',
            },
            {
                label: 'Хлорид',
                data: labels.map((key) =>{
                    return globalEnvData.data[globalSettings.currentAreaTitle].history[key].chlorides
                } ),
                backgroundColor: 'rgba(94,255,0,0.5)',
            },
            {
                label: 'Свободный диоксид серы',
                data: labels.map((key) =>{
                    return globalEnvData.data[globalSettings.currentAreaTitle].history[key].free_sulfur_dioxide
                } ),
                backgroundColor: 'rgba(94,255,0,0.5)',
            },
            {
                label: 'Суммарный диоксид серы',
                data: labels.map((key) =>{
                    return globalEnvData.data[globalSettings.currentAreaTitle].history[key].total_sulfur_dioxide
                } ),
                backgroundColor: 'rgba(77,3,3,0.5)',
            },
            {
                label: 'Плотность',
                data: labels.map((key) =>{
                    return globalEnvData.data[globalSettings.currentAreaTitle].history[key].density
                } ),
                backgroundColor: 'rgba(255,100,0,0.5)',
            },
            {
                label: 'Водородный показатель',
                data: labels.map((key) =>{
                    return globalEnvData.data[globalSettings.currentAreaTitle].history[key].pH
                } ),
                backgroundColor: 'rgba(0,236,146,0.5)',
            },
            {
                label: 'Сульфаты',
                data: labels.map((key) =>{
                    return globalEnvData.data[globalSettings.currentAreaTitle].history[key].sulphates
                } ),
                backgroundColor: 'rgba(7,0,255,0.5)',
            },
        ],
    };

    return (<div style={{width:100+'%',height:70+'%'}}>
        <Bar options={options} data={data} />
    </div>)
})

export const NewCurrentChart = observer(() => {
    const { globalEnvData, globalSettings } = useStore();
    const labels = [WineParams.airHumidity,WineParams.windSpeed,WineParams.precipitation,WineParams.temperature];

    const data = {
        labels:labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => [0,1,3]),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (<div style={{width:100+'%',height:100+'%'}}>
        <Bar options={options} data={data} />
    </div>)
})
