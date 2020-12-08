import React, { ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { LineLeft } from './LineLeft'
import { LineRight } from './LineRight'
import { Text } from 'react-native'
interface BackgroundProps {
  children?: ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return (
    <LinearGradient colors={['#47BFDF', '#4A91FF']} style={{ flex: 1 }}>
      <LineLeft
        style={{
          position: 'absolute',
          top: 90,
          left: 0,
        }}
      />
      <LineRight
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      {children}
    </LinearGradient>
  )
}
