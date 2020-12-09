import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconChevron } from '../../components/IconChevron'
import TextShadow from '../../components/TextShadow'
import moment from 'moment-timezone'

export function Header() {
  const navigation = useNavigation()

  return (
    <View style={{ paddingTop: 30, paddingHorizontal: 30 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
        <IconChevron />
        <TextShadow
          style={{
            marginLeft: 18,
            fontFamily: 'Overpass_600SemiBold',
            color: 'white',
            fontSize: 24,
          }}
        >
          Back
        </TextShadow>
      </TouchableOpacity>
    </View>
  )
}
