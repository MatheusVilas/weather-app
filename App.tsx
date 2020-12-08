import React, { useRef } from 'react'
import FlashMessage from 'react-native-flash-message'
import SafeArea from './src/components/SafeArea'
import Home from './src/views/Home'

export default function App() {
  const myFlashMessage = useRef(null)

  return (
    <SafeArea>
      <Home />
      <FlashMessage ref={myFlashMessage} />
    </SafeArea>
  )
}
