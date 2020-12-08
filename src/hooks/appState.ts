import React, { useState, useEffect, useRef } from 'react'
import { AppState, AppStateStatus } from 'react-native'

export function useAppState(): AppStateStatus {
  const appState = useRef(AppState.currentState)
  const [appStateVisible, setAppStateVisible] = useState(appState.current)

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange)

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange)
    }
  }, [])

  const _handleAppStateChange = (nextAppState: any) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!')
    }

    appState.current = nextAppState
    setAppStateVisible(appState.current)
  }

  return appStateVisible
}
