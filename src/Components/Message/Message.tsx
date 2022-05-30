import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Message = ({ name, date, title, image }: any) => {
  return (
    <View style={styles.Container}>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.image} source={image}></Image>
        <View style={styles.body}>
          <Text style={{fontSize:17, fontWeight:"700"}} >{name}</Text>
          <View style={{ flexDirection: "row" , justifyContent:'space-between' }}>
            <Text style={{color:'gray', width:'60%'}}>{title}</Text>

            <Text>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  Container: {
      marginTop:5,
    backgroundColor:"#E9F0F5",
    padding: 5,
    height:60
  },
  body: {
      width:'80%',
      alignSelf:"center"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginRight: 5,
  },
});
