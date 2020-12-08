import React, { ReactNode } from 'react'
import { View, SafeAreaView, StyleProp, ViewStyle } from 'react-native'

interface SafeAreaProps {
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}

export default function SafeArea({ style, children }: SafeAreaProps) {
  return (
    <SafeAreaView style={[{ flex: 1 }, style]}>
      <View style={{ flex: 1 }}>{children}</View>
    </SafeAreaView>
  )
}
