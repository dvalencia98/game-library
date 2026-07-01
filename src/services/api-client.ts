import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1f1d260296d14ca6817e9ed28ca6bbfb'
    }
})