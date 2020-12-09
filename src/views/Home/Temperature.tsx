import React from 'react'
import { View, StyleSheet } from 'react-native'
import { IconHumidity } from '../../components/IconHumidity'
import { IconWind } from '../../components/IconWind'
import TextShadow from '../../components/TextShadow'
import moment from 'moment-timezone'

interface TemperatureProps {
  temperature: number
  humidity: string
  wind_speed: number
  weatherType: string
}

export default function Temperature({
  temperature,
  humidity,
  wind_speed,
  weatherType,
}: TemperatureProps) {
  const day = moment().tz('America/Sao_Paulo').format('DD')
  const month = moment().tz('America/Sao_Paulo').format('MMMM')

  return (
    <View style={styles.wrapper}>
      <TextShadow style={styles.todayDate}>
        Today, {day} {month}
      </TextShadow>

      <TextShadow style={styles.temperature}>
        {Math.floor(temperature)}°
      </TextShadow>

      <TextShadow style={styles.temperatureStatus}>{weatherType}</TextShadow>

      <View style={styles.detailTable}>
        <View style={styles.detailRow}>
          <IconWind />
          <TextShadow style={[styles.detailTd, styles.fixWidth]}>
            Wind
          </TextShadow>
          <TextShadow style={styles.detailTd}>|</TextShadow>
          <TextShadow style={[styles.detailTd, styles.fixWidth]}>
            {Math.floor(wind_speed)}km/h
          </TextShadow>
        </View>
        <View style={styles.detailRow}>
          <IconHumidity />
          <TextShadow style={[styles.detailTd, styles.fixWidth]}>
            Hum
          </TextShadow>
          <TextShadow style={styles.detailTd}>|</TextShadow>
          <TextShadow style={[styles.detailTd, styles.fixWidth]}>
            {humidity} %
          </TextShadow>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 17,
    paddingBottom: 27,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'white',
  },
  todayDate: {
    fontFamily: 'Overpass_400Regular',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  temperature: {
    fontFamily: 'Overpass_400Regular',
    fontSize: 68,
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  temperatureStatus: {
    fontFamily: 'Overpass_700Bold',
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 30,
  },
  detailTable: {
    width: 200,
    alignSelf: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailTd: {
    fontFamily: 'Overpass_400Regular',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  fixWidth: {
    width: 70,
  },
})
