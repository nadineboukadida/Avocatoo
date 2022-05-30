import { StyleSheet, Text, View , Image } from 'react-native'
import React, { useState } from 'react'
import girl from '../../../../assets/girl.png'
import guy from '../../../../assets/guy.png'

export default function LPinfo({info}) {

  return (
    <View style={styles.container}>
{info.gender=="F"&& 
<View style={[{paddingRight:5 ,paddingLeft:5,paddingBottom:5}]}>
    <Image style={styles.img} source={girl}></Image>
</View>
}
{ info.gender=="M" &&  <View style={{paddingRight:10}}>
    <Image style={styles.img} source={guy}></Image>
</View>
}

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft:10,
    },
    selected: {
        backgroundColor:'yellow',
    },
    scrollView:{
        flexDirection:"row"
    },
    img: {
        width:60,
        height:60,
    
    }
})