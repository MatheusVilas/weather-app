import React from 'react'
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native'

interface ButtonProps {
  onPress: () => void
  label: string
  style?: StyleProp<ViewStyle>
}

export function Button({ label, onPress, style }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: '#fff',
          paddingHorizontal: 28,
          paddingVertical: 18,
          borderRadius: 18,
          width: 220,
          alignSelf: 'center',
        },
        style,
      ]}
      {...{ onPress }}
    >
      <Text
        style={{
          fontFamily: 'Overpass_400Regular',
          color: '#444E72',
          fontSize: 18,
          textAlign: 'center',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
