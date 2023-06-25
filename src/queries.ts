import axios from "axios";
import {serverUrl} from "./env";

export const getHistory = () => {
    return axios.post(serverUrl + '/map', {
        id: 'Виноградник №2'
    })
}
export const getLastHistoryItem = () => {
    return axios.post(serverUrl + '/last_date', {
        id: 'Виноградник №2'
    })
}