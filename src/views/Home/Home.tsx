import React, { useEffect, useState } from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getWeatherByLocalization } from '../../api'
import * as Location from 'expo-location'
import { useAppState } from '../../hooks/appState'
import { Loading } from '../../components/Loading'
import Background from '../../components/Background'
import { showMessage } from 'react-native-flash-message'
import { LinearGradient } from 'expo-linear-gradient'
import {
  useFonts,
  Overpass_700Bold,
  Overpass_400Regular,
} from '@expo-google-fonts/overpass'
import { IconHumidity } from '../../components/IconHumidity'
import Header from './Header'
import Temperature from './Temperature'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [weatherByLocalization, setWeatherByLocalization] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [triggerRefresh, setTriggerRefresh] = useState(false)
  const appState = useAppState()
  let [fontsLoaded] = useFonts({
    Overpass_700Bold,
    Overpass_400Regular,
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
        setWeatherByLocalization(JSON.stringify(success))
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
          onPress={() => {
            setErrorMsg('')
            setIsLoading(true)
            setTriggerRefresh(!triggerRefresh)
          }}
        />
      </Background>
    )

  return (
    <Background>
      <View style={styles.wrapper}>
        <Header location="Praia Grande" weatherType="thunder" />
        <View style={styles.content}>
          <View style={styles.container}>
            <Temperature />
          </View>
        </View>

        <Button
          label="Complete Report"
          onPress={() => {
            navigation.navigate('Detailed')
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
