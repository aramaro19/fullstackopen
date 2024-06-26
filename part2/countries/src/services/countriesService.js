import axios from "axios"

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api"

const getAll = () => axios.get(`${baseUrl}/all`)

const getCountry = name => axios.get(`${baseUrl}/name/${name}`)

export default {getAll, getCountry}