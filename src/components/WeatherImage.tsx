import React from 'react'
import { View, Image, ViewStyle, StyleProp } from 'react-native'
import { getCorrectWeatherType } from '../function/getCorrectWeatherType'

export type WeatherType = 'cloudy' | 'rain' | 'sun' | 'thunder'
interface WeatherImageProps {
  type: WeatherType
  size: 'large' | 'small'
  style?: StyleProp<ViewStyle>
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
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        },
        size === 'small' ? {} : { flex: 1 },
      ]}
    >
      <Image
        style={
          size === 'small'
            ? {
                width: 40,
                height: 40,
              }
            : {}
        }
        resizeMode={size === 'small' ? 'contain' : 'center'}
        source={allTypes[getCorrectWeatherType(type)]}
      />
    </View>
  )
}
