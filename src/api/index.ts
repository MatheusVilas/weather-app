// @ts-ignore
import { API_KEY } from '@env'
import Axios from 'axios'

export const API_ID = API_KEY

export const weatherApi = Axios.create({
  baseURL: `https://api.openweathermap.org`,
})

export const cityApi = Axios.create({
  baseURL: `https://api.bigdatacloud.net`,
})

interface IWeather {
  lat: number
  long: number
}

export function getWeatherByLocalization({ lat, long }: IWeather) {
  return weatherApi.get(
    `data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_ID}&lang=pt_br&units=metric`,
  )
}

export function getCityByLocalization({ lat, long }: IWeather) {
  return cityApi.get(
    `/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`,
  )
}
