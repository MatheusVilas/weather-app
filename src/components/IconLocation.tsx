import * as React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'

export function IconLocation() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <G>
        <Path
          d="M12 23.728l-6.364-6.364a9 9 0 1112.728 0L12 23.728zm4.95-7.778a7 7 0 10-9.9 0L12 20.9l4.95-4.95zM12 13a2 2 0 110-4 2 2 0 010 4z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}
