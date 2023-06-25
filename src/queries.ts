import axios from "axios";
import {serverUrl} from "./env";

export const getHistory = () => {
    return axios.get(serverUrl + '/history')
}
export const getLastHistoryItem = () => {
    return axios.get(serverUrl + '/last_date')
}