import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import TextShadow from '../../components/TextShadow'
import { WeatherImage } from '../../components/WeatherImage'
import moment from 'moment-timezone'

interface HoursProps {
  hourly: any
}

export function Hours({ hourly }: HoursProps) {
  const day = moment().tz('America/Sao_Paulo').format('DD')
  const month = moment().tz('America/Sao_Paulo').format('MMMM')

  return (
    <View style={{ marginTop: 49 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 32,
          paddingHorizontal: 30,
        }}
      >
        <TextShadow style={styles.textDay}>Today</TextShadow>
        <TextShadow style={styles.textNumber}>
          {month}, {day}
        </TextShadow>
      </View>
      <ScrollView
        style={{
          width: Dimensions.get('screen').width,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {hourly.map((item: any, index: number) => {
          return (
            <View
              key={index}
              style={{
                paddingHorizontal: 13,
                paddingVertical: 14,
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <TextShadow style={styles.textNumber}>
                {Math.floor(item.temp)}°
              </TextShadow>
              <WeatherImage size="small" type={item.weather[0].main} />
              <TextShadow style={styles.textNumber}>
                {moment.unix(item.dt).format('HH:mm')}
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
