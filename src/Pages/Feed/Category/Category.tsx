import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = ({color,text}:any) => {
  return (
     
        <View style={[styles.Container,{backgroundColor:color}]}>
      <Text style={{color:'white'}}>{text}</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    Container:{
        margin:5,
        minWidth:100,
        alignItems:'center',
        paddingVertical:8,
        paddingHorizontal:12,
        borderRadius:5,
    }
})