import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  AppState,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getWeatherByLocalization } from "../api";
import * as Location from "expo-location";
import { useAppState } from "../hooks/appState";
import { Loading } from "../components/Loading";
import { showMessage, hideMessage } from "react-native-flash-message";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Overpass_700Bold,
  Overpass_400Regular,
} from "@expo-google-fonts/overpass";
import { IconLocation } from "../components/IconLocation";
import { LineLeft } from "../components/LineLeft";
import { LineRight } from "../components/LineRight";
import { WeatherImage } from "../components/WeatherImage";

export function Home() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState("");
  const [weatherByLocalization, setWeatherByLocalization] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const appState = useAppState();
  let [fontsLoaded] = useFonts({
    Overpass_700Bold,
    Overpass_400Regular,
  });

  useEffect(() => {
    if (appState !== "active") return;

    requestLocalization();
  }, [appState]);

  useEffect(() => {
    if (!location) return;

    getWeatherByLocalization({
      lat: location?.coords.latitude,
      long: location?.coords.longitude,
    })
      .then((success) => {
        setWeatherByLocalization(JSON.stringify(success));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [location]);

  async function requestLocalization() {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      return showMessage({
        message: "Permission to access location was denied",
        description: 'Click "here" for allow access to Location',
        type: "danger",
        autoHide: false,
        onPress: () => {
          Linking.openSettings();
        },
      });
    }

    let location = await Location.getCurrentPositionAsync({});

    setLocation(location);
  }

  if (isLoading || !fontsLoaded) return <Loading />;

  return (
    <LinearGradient colors={["#47BFDF", "#4A91FF"]} style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <LineLeft
            style={{
              position: "absolute",
              top: 90,
              left: 0,
            }}
          />
          <LineRight
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          />
          <View style={styles.container}>
            <View style={styles.location}>
              <IconLocation />
              <Text style={styles.locationText}>Semarang</Text>
            </View>

            <WeatherImage size="large" type="cloudy" />
          </View>
        </View>

        <View style={styles.content}></View>

        <TouchableOpacity>
          <Text style={styles.locationText}>Semarang</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
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
  header: {
    flex: 1,
    paddingTop: 50,
  },
  content: {
    flex: 1,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontFamily: "Overpass_700Bold",
    color: "white",
    fontSize: 24,
    marginLeft: 20,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: {
      width: -2,
      height: 3,
    },
    textShadowRadius: 1,
  },
});
