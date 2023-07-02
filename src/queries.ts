import axios from "axios";
import { serverUrl} from "./env";

export const getHistory = (data) => {
    console.log(data)
    //"id": "Виноградник №2"
    // return axios.post(serverUrl + '/predict', data)
    return axios.get(serverUrl + '/map')
}
export const getLastHistoryItem = (data) => {
    // return axios.post(serverUrl + '/last_data',data)
    return axios.get(serverUrl + '/last_date')
}
export const predict = (data) => {
    // return axios.post('/predict', data)
    return axios.get(serverUrl+ '/predict')

}