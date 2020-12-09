import { WeatherType } from '../components/WeatherImage'

export function getCorrectWeatherType(weatherType: string): WeatherType {
  switch (weatherType) {
    case 'Thunderstorm':
      return 'thunder'
    case 'Drizzle':
      return 'thunder'
    case 'Rain':
      return 'rain'
    case 'Snow':
      return 'cloudy'
    case 'Mist':
      return 'cloudy'
    case 'Smoke':
      return 'cloudy'
    case 'Haze':
      return 'cloudy'
    case 'Dust':
      return 'cloudy'
    case 'Fog':
      return 'cloudy'
    case 'Sand':
      return 'cloudy'
    case 'Ash':
      return 'cloudy'
    case 'Squall':
      return 'cloudy'
    case 'Tornado':
      return 'thunder'
    case 'Clear':
      return 'sun'
    case 'Clouds':
      return 'rain'
    default:
      return 'sun'
  }
}
