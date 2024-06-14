import axios from 'axios'

const baseUrl = "http://api.weatherapi.com/v1/current.json"
const apiKey = import.meta.env.VITE_API_KEY



const getWeather = (name) => {
    const params = {
        q: name,
        key: apiKey,
        aqi: "no"
    }
    return axios.get(baseUrl, {params: params})
}

export default { getWeather }