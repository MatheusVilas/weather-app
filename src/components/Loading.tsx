import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export function Loading() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator color="white" size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})
