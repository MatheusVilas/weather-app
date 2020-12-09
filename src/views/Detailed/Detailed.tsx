import React from 'react'

import Background from '../../components/Background'
import { Days } from './Days'
import { Header } from './Header'

import { Hours } from './Hours'

export function Detailed({ route }: any) {
  const { hourly, daily } = route?.params

  return (
    <Background>
      <Header />
      <Hours {...{ hourly }} />
      <Days {...{ daily }} />
    </Background>
  )
}
