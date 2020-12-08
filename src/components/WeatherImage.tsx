import React from 'react'
import { View, Text, Image } from 'react-native'

export type WeatherType = 'cloudy' | 'rain' | 'sun' | 'thunder'
interface WeatherImageProps {
  type: WeatherType
  size: 'large' | 'small'
}

export function WeatherImage({ size, type }: WeatherImageProps) {
  const allTypes = {
    cloudy: require('../assets/images/cloudy.png'),
    rain: require('../assets/images/rain.png'),
    sun: require('../assets/images/sun.png'),
    thunder: require('../assets/images/thunder.png'),
  }

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'center',
      }}
    >
      <Image resizeMode="center" source={allTypes[type]} />
    </View>
  )
}
