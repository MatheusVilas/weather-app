// @ts-ignore
import { API_KEY } from '@env'
import Axios from 'axios'

export const API_ID = API_KEY

export const weatherApi = Axios.create({
  baseURL: `https://api.openweathermap.org`,
})

interface IWeather {
  lat: number
  long: number
}

export function getWeatherByLocalization({ lat, long }: IWeather) {
  return weatherApi.get(
    `data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_ID}`,
  )
}
