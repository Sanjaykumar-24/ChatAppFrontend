import React, { useContext } from 'react'
import {View,Text} from 'react-native'
import { Context } from '../context/Context'
export default function HomeScreen() {
    const {name} = useContext(Context)
  return (
    <View>
    <Text>
    {name}
    </Text>
    </View>
  )
}
