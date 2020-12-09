import React, { useEffect, useState } from 'react'
import { Linking, StyleSheet, View } from 'react-native'
import { getWeatherByLocalization } from '../../api'
import * as Location from 'expo-location'
import { useAppState } from '../../hooks/appState'
import { Loading } from '../../components/Loading'
import Background from '../../components/Background'
import { showMessage } from 'react-native-flash-message'

import {
  useFonts,
  Overpass_700Bold,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_900Black,
} from '@expo-google-fonts/overpass'

import Header from './Header'
import Temperature from './Temperature'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import TextShadow from '../../components/TextShadow'

export function Home() {
  const navigation = useNavigation()
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [weatherByLocalization, setWeatherByLocalization] = useState<any>('')
  const [isLoading, setIsLoading] = useState(true)
  const [triggerRefresh, setTriggerRefresh] = useState(false)
  const appState = useAppState()
  let [fontsLoaded] = useFonts({
    Overpass_700Bold,
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_900Black,
  })

  useEffect(() => {
    if (appState !== 'active') return

    requestLocalization()
  }, [appState, triggerRefresh])

  useEffect(() => {
    if (!location) return

    getWeatherByLocalization({
      lat: location?.coords.latitude,
      long: location?.coords.longitude,
    })
      .then(success => {
        console.log(success.data)
        setWeatherByLocalization(success.data)
      })
      .catch(error => {
        setErrorMsg(error.message)
        showMessage({
          message: 'Sorry',
          description: 'We have a problem, try again',
          type: 'danger',
          autoHide: true,
          duration: 10000,
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [location])

  async function requestLocalization() {
    let { status } = await Location.requestPermissionsAsync()

    if (status !== 'granted') {
      return showMessage({
        message: 'Permission to access location was denied',
        description: 'Click "here" for allow access to Location',
        type: 'danger',
        autoHide: false,
        onPress: () => {
          Linking.openSettings()
        },
      })
    }

    let location = await Location.getCurrentPositionAsync({})

    setLocation(location)
  }

  function handleReload() {
    setErrorMsg('')
    setIsLoading(true)
    setTriggerRefresh(!triggerRefresh)
  }

  if (isLoading || !fontsLoaded)
    return (
      <Background>
        <Loading />
      </Background>
    )

  if (errorMsg)
    return (
      <Background>
        <Button
          style={{ marginTop: 120 }}
          label="Refresh"
          onPress={handleReload}
        />
      </Background>
    )

  return (
    <Background>
      <View style={styles.wrapper}>
        <Header
          lat={location?.coords.latitude}
          long={location?.coords.longitude}
          weatherType={weatherByLocalization?.current?.weather[0].main}
          handleReload={handleReload}
        />
        <View style={styles.content}>
          <View style={styles.container}>
            <Temperature
              wind_speed={weatherByLocalization?.current?.wind_speed}
              weatherType={weatherByLocalization?.current?.weather[0].main}
              humidity={weatherByLocalization?.current?.humidity}
              temperature={weatherByLocalization?.current?.temp}
            />
          </View>
        </View>

        <Button
          label="Complete Report"
          onPress={() => {
            navigation.navigate('Detailed', {
              hourly: weatherByLocalization.hourly,
              daily: weatherByLocalization.daily,
            })
          }}
        />
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 30,
  },
  container: {
    paddingHorizontal: 30,
    flex: 1,
  },
  content: {
    flex: 1,
  },
})
