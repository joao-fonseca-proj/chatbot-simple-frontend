import { BASE_URI } from "../config/RestConfig";
import axios from 'axios'


export function postMessage(message) {
    return axios.post(BASE_URI + "/predict", { text: message});
}