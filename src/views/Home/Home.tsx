import React, { useEffect, useState } from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getWeatherByLocalization } from '../../api'
import * as Location from 'expo-location'
import { useAppState } from '../../hooks/appState'
import { Loading } from '../../components/Loading'
import { showMessage } from 'react-native-flash-message'
import { LinearGradient } from 'expo-linear-gradient'
import {
  useFonts,
  Overpass_700Bold,
  Overpass_400Regular,
} from '@expo-google-fonts/overpass'
import { IconHumidity } from '../../components/IconHumidity'
import Header from './Header'

export function Home() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [weatherByLocalization, setWeatherByLocalization] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const appState = useAppState()
  let [fontsLoaded] = useFonts({
    Overpass_700Bold,
    Overpass_400Regular,
  })

  useEffect(() => {
    if (appState !== 'active') return

    requestLocalization()
  }, [appState])

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
        showMessage({
          message: 'Sorry',
          description: 'We have a problem, try later',
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

  if (isLoading || !fontsLoaded) return <Loading />

  return (
    <LinearGradient colors={['#47BFDF', '#4A91FF']} style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <Header location="Praia Grande" weatherType="thunder" />
        <View style={styles.content}>
          <View style={styles.container}>
            <View
              style={{
                paddingTop: 17,
                paddingBottom: 27,
                backgroundColor: 'rgba(255,255,255, 0.3)',
                borderRadius: 18,
                borderWidth: 1,
                borderColor: 'white',
              }}
            >
              <Text
                style={[
                  {
                    fontFamily: 'Overpass_400Regular',
                    fontSize: 18,
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: 5,
                  },
                  styles.textShadow,
                ]}
              >
                Today, 12 September
              </Text>
              <Text
                style={[
                  {
                    fontFamily: 'Overpass_400Regular',
                    fontSize: 68,
                    color: 'white',
                    textAlign: 'center',
                  },
                  styles.textShadow,
                ]}
              >
                29°
              </Text>
              <Text
                style={[
                  {
                    fontFamily: 'Overpass_700Bold',
                    fontSize: 22,
                    color: 'white',
                    textAlign: 'center',
                    marginTop: -10,
                    marginBottom: 30,
                  },
                  styles.textShadow,
                ]}
              >
                Cloudy
              </Text>
              <View
                style={{
                  width: 200,
                  alignSelf: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 16,
                  }}
                >
                  <IconHumidity />
                  <Text
                    style={[
                      {
                        fontFamily: 'Overpass_400Regular',
                        fontSize: 18,
                        color: 'white',
                        textAlign: 'center',
                      },
                      styles.textShadow,
                    ]}
                  >
                    Wind
                  </Text>
                  <Text
                    style={[
                      {
                        fontFamily: 'Overpass_400Regular',
                        fontSize: 18,
                        color: 'white',
                        textAlign: 'center',
                      },
                      styles.textShadow,
                    ]}
                  >
                    |
                  </Text>
                  <Text
                    style={[
                      {
                        fontFamily: 'Overpass_400Regular',
                        fontSize: 18,
                        color: 'white',
                        textAlign: 'center',
                      },
                      styles.textShadow,
                    ]}
                  >
                    10km/h
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <IconHumidity />
                  <Text
                    style={[
                      {
                        fontFamily: 'Overpass_400Regular',
                        fontSize: 18,
                        color: 'white',
                        textAlign: 'center',
                      },
                      styles.textShadow,
                    ]}
                  >
                    Wind
                  </Text>
                  <Text
                    style={[
                      {
                        fontFamily: 'Overpass_400Regular',
                        fontSize: 18,
                        color: 'white',
                        textAlign: 'center',
                      },
                      styles.textShadow,
                    ]}
                  >
                    |
                  </Text>
                  <Text
                    style={[
                      {
                        fontFamily: 'Overpass_400Regular',
                        fontSize: 18,
                        color: 'white',
                        textAlign: 'center',
                      },
                      styles.textShadow,
                    ]}
                  >
                    10km/h
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 28,
            paddingVertical: 18,
            borderRadius: 18,
            width: 220,
            alignSelf: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Overpass_400Regular',
              color: '#444E72',
              fontSize: 18,
              textAlign: 'center',
            }}
          >
            Complete Report
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
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
  locationText: {
    fontFamily: 'Overpass_700Bold',
    color: 'white',
    fontSize: 24,
    marginLeft: 20,
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {
      width: -2,
      height: 3,
    },
    textShadowRadius: 1,
  },
})
