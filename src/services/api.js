import axios from "axios";

const api = axios.create(
    {
        baseURL:'https://mario-kart-api.herokuapp.com/api/v1/'
    }
);

export default api;