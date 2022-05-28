import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Button({text , color , dir , onclick  }) {
  return (

    <View onTouchStart={onclick} style={{ backgroundColor:color ,paddingVertical: 10, height: 45,
    paddingHorizontal: 30 , borderBottomLeftRadius:dir==0?0:20 , borderTopLeftRadius:dir==0?0:20
    ,borderBottomRightRadius: dir==0?20:0, borderTopRightRadius: dir==0?20:0 , marginTop: dir==0?30:0
    }} > 
        <Text style={{color: 'white' , fontSize : 15, justifyContent:'center',alignContent:'center',}}>{text}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
container: {
 
}
})