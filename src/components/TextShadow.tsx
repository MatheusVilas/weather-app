import React, { ReactNode } from 'react'
import { Text, StyleProp, TextStyle } from 'react-native'

interface TextShadowProps {
  children: ReactNode
  style?: StyleProp<TextStyle>
}

export default function TextShadow({ children, style }: TextShadowProps) {
  return (
    <Text
      style={[
        {
          textShadowColor: 'rgba(0, 0, 0, 0.1)',
          textShadowOffset: {
            width: -2,
            height: 3,
          },
          textShadowRadius: 1,
        },
        style,
      ]}
    >
      {children}
    </Text>
  )
}
