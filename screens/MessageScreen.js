import React, { useContext } from 'react'
import {View,Text} from 'react-native'
import { Context } from '../context/Context'
import { StatusBar } from 'expo-status-bar'
export default function MessageScreen()
{
  const {groupId} = useContext(Context)
 return (
    <View>
    <Text style={{marginTop:'50%'}}>
    {groupId}
    </Text>
    <StatusBar/>
    </View>
  )
}
