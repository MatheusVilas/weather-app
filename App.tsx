import React, { useRef } from 'react'
import FlashMessage from 'react-native-flash-message'
import SafeArea from './src/components/SafeArea'
import RootNavigation from './src/navigation/RootNavigation'

export default function App() {
  const myFlashMessage = useRef(null)

  return (
    <SafeArea>
      <RootNavigation />
      <FlashMessage ref={myFlashMessage} />
    </SafeArea>
  )
}
