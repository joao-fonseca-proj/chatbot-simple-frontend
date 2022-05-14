import { BASE_URI } from "../config/RestConfig";

export function postMessage(message) {
    return axios.post(BASE_URI + "/predict", { text: message});
}