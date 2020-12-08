import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import Svg, { Path } from 'react-native-svg'

interface LineLeftProps {
  style?: StyleProp<ViewStyle>
}

export function LineLeft({ style }: LineLeftProps) {
  return (
    <Svg
      width={88}
      height={237}
      viewBox="0 0 88 237"
      fill="none"
      {...{ style }}
    >
      <Path
        d="M-16.697 5.515C6.83 3.254 61.81-13.252 81.436 35.288c24.533 60.675-41.14 75.75-22.269 132.656 18.872 56.907-29.44 90.07-84.167 51.253"
        stroke="#fff"
        strokeOpacity={0.3}
        strokeLinecap="round"
        strokeDasharray="10 10"
      />
    </Svg>
  )
}
