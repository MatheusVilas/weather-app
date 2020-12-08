import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import Svg, { Path } from 'react-native-svg'

interface LineRightProps {
  style?: StyleProp<ViewStyle>
}

export function LineRight({ style }: LineRightProps) {
  return (
    <Svg
      width={283}
      height={313}
      viewBox="0 0 283 313"
      fill="none"
      {...{ style }}
    >
      <Path
        d="M21.5-54l-4.582 7.523C-24.254 21.116 19.338 108.51 98.1 116.28v0c51.298 5.06 91.794 46.149 96.448 97.485v0c5.053 55.727 51.802 98.735 107.758 98.735H353"
        stroke="#fff"
        strokeOpacity={0.3}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="10 10"
      />
    </Svg>
  )
}
