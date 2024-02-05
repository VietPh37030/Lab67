import { View, Text } from 'react-native'
import React from 'react'

export default function ScreenOne() {
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'red'}}>
      <Text style={{fontSize:30,color:'#fff'}}>ScreenOne</Text>
    </View>
  )
}