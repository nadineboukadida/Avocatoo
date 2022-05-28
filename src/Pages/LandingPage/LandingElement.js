import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../../Components/Button';
import { Dimensions } from 'react-native';
export default function LandingElement({ image, text, onpressNext, onpressSkip, button }) {
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={image}></Image>
      <Text style={styles.text}>{text}</Text>
      <View style={[styles.containerButtons, { justifyContent: button == 1 ? 'flex-end' : 'space-between' }]}>
        {button != 1 && <Button text="Skip" color={'#B1E30E'} dir={0} onclick={onpressSkip} ></Button>}
        <Button align={1} text={button == 1 ? 'Login' : 'Next'} color={'#3C2C5B'} onclick={onpressNext}></Button>



      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  Image: {
    marginTop: -150,
    width: "90%",
    height: "70%",
    resizeMode: 'contain'
  },
  text: {
    backgroundColor: '#D2CBE0',
    marginTop: -30,
    textAlign: 'center',
    padding: 20,
    borderRadius: 10,
    maxWidth: '80%',
    fontSize: 16

  },
  containerButtons: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',

    alignContent: 'flex-end',
    height: 80

  },
  button: {

  }
});