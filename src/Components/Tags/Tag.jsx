import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tag = ({color,text}) => {
  return (
       
        <View style={[ {backgroundColor: color},styles.Container]}>
   
      <Text style={{color:"white", fontWeight:'700'}}>{text}</Text>
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
    Container: {
        marginBottom:3,
        minWidth:50,
        maxWidth:200,
        marginHorizontal:5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:1,
       
    }
})