import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { getCityByLocalization } from '../../api'
import { IconLocation } from '../../components/IconLocation'

import TextShadow from '../../components/TextShadow'
import { WeatherImage, WeatherType } from '../../components/WeatherImage'
import { Container } from './Container'

const SCREEN_HEIGHT = Dimensions.get('screen').height
const HEADER_HEIGHT = SCREEN_HEIGHT * 0.3

interface HeaderProps {
  lat: number | undefined
  long: number | undefined
  weatherType: WeatherType
}

export default function Header({ lat, long, weatherType }: HeaderProps) {
  return (
    <View style={styles.header}>
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
            {lat}, {long}
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
