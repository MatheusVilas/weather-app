import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { IconLocation } from '../../components/IconLocation'
import { LineLeft } from '../../components/LineLeft'
import { LineRight } from '../../components/LineRight'
import TextShadow from '../../components/TextShadow'
import { WeatherImage, WeatherType } from '../../components/WeatherImage'
import { Container } from './Container'

const SCREEN_HEIGHT = Dimensions.get('screen').height
const HEADER_HEIGHT = SCREEN_HEIGHT * 0.3

interface HeaderProps {
  location: string
  weatherType: WeatherType
}

export default function Header({ location, weatherType }: HeaderProps) {
  return (
    <View style={styles.header}>
      <LineLeft
        style={{
          position: 'absolute',
          top: 90,
          left: 0,
        }}
      />
      <LineRight
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      <Container>
        <View style={styles.location}>
          <IconLocation />
          <TextShadow
            style={{
              fontFamily: 'Overpass_700Bold',
              color: 'white',
              fontSize: 24,
              marginLeft: 20,
            }}
          >
            {location}
          </TextShadow>
        </View>

        <WeatherImage size="large" type={weatherType} />
      </Container>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    maxHeight: HEADER_HEIGHT,
    paddingTop: 30,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
