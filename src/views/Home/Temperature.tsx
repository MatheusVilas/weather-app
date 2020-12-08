import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IconHumidity } from '../../components/IconHumidity'
import { IconWind } from '../../components/IconWind'
import TextShadow from '../../components/TextShadow'

export default function Temperature() {
  return (
    <View style={styles.wrapper}>
      <TextShadow style={styles.todayDate}>Today, 12 September</TextShadow>

      <TextShadow style={styles.temperature}>29°</TextShadow>

      <TextShadow style={styles.temperatureStatus}>Cloudy</TextShadow>

      <View style={styles.detailTable}>
        <View style={styles.detailRow}>
          <IconWind />
          <TextShadow style={[styles.detailTd, styles.fixWidth]}>
            Wind
          </TextShadow>
          <TextShadow style={styles.detailTd}>|</TextShadow>
          <TextShadow style={[styles.detailTd, styles.fixWidth]}>
            10km/h
          </TextShadow>
        </View>
        <View style={styles.detailRow}>
          <IconHumidity />
          <TextShadow style={[styles.detailTd, styles.fixWidth]}>
            Hum
          </TextShadow>
          <TextShadow style={styles.detailTd}>|</TextShadow>
          <TextShadow style={[styles.detailTd, styles.fixWidth]}>
            54 %
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
