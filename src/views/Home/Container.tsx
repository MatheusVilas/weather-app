import React, { ReactNode } from 'react'
import { View } from 'react-native'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <View
      style={{
        paddingHorizontal: 30,
        flex: 1,
      }}
    >
      {children}
    </View>
  )
}
