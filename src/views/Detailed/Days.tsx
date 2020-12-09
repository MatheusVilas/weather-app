import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import TextShadow from '../../components/TextShadow'
import { WeatherImage } from '../../components/WeatherImage'
import moment from 'moment-timezone'

interface DaysProps {
  daily: any
}

export function Days({ daily }: DaysProps) {
  return (
    <View style={{ marginTop: 49, flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 32,
          paddingHorizontal: 30,
        }}
      >
        <TextShadow style={styles.textDay}>Next Forecast</TextShadow>
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        {daily.map((item: any, index: number) => {
          const temperatureAverage = Math.floor(
            parseInt(item.temp.min) + parseInt(item.temp.max) / 2,
          )

          const monthDay = `${moment
            .unix(item.dt)
            .format('MMM')}, ${moment.unix(item.dt).format('DD')}`

          return (
            <View
              key={index}
              style={{
                paddingHorizontal: 36,
                paddingVertical: 14,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            >
              <TextShadow style={styles.textNumber}>{monthDay}</TextShadow>
              <WeatherImage size="small" type={item.weather[0].main} />
              <TextShadow style={styles.textNumber}>
                {temperatureAverage}°
              </TextShadow>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  textDay: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Overpass_900Black',
  },
  textNumber: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Overpass_400Regular',
  },
})
