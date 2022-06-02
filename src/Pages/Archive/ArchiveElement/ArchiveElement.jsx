import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import profil from "../../../../assets/profil.png"
var maxWidth = Dimensions.get("window").width;

const ArchiveElement = ({ text, image, shown, ind }) => {
  return (
    <>
      {shown && (
        <View style={[styles.Container,  { marginTop: -150 }]}>
          <View style={styles.containerImg}>
            <Image style={styles.Image} source={image}></Image>
            <View style={{justifyContent:"flex-start", flexDirection:"column", height:150}}>
            <View style={styles.Details}>
              <View>
                <Text style={styles.text}>Name :</Text>
                <Text style={styles.text}>Nadine Boukadida</Text>
              </View>
              <View>
              <Image style={styles.profil} source={profil}></Image>

              </View>
            </View>
            <View style={styles.expertise}>
              <Text style={{color:'white'}}>Question : </Text>
              <Text style={{color:'lavender'}}>fight with a man at a Cafe , he is taking me to court !</Text>
            </View>
            <View style={styles.button}>
              <View style={styles.btn}>
                <Text>More</Text></View>
            </View>
          </View></View>
        </View>
      )}
    </>
  );
};

export default ArchiveElement;

const styles = StyleSheet.create({
  button: {
    width:250,
    marginTop:30,
    justifyContent:"flex-end",
    alignItems:"flex-end",
  },
  btn: {
    backgroundColor:"white",
    paddingVertical:3,
    paddingHorizontal:15,
    borderRadius:20

  },
  expertise:{
    marginTop:20,
    color:"white",
    width:220,
    height:40
  },
  text: {
    color: "white",
    fontWeight: "700"
  },
  Container: {
    width: maxWidth,
    height: 220,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  containerImg: {
    width: 320,
    height: 220,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  Image: {
    width: 300,
    position: "absolute",
    height: 300,
    resizeMode: "contain",
  },
  Details : {
    justifyContent:"space-between",
    flexDirection:"row",
    width:250,
    alignItems:"flex-start",
    display:"flex",
  },
  profil: {
    width:40,
    height:40,
    borderRadius:500,
    marginRight:-10
  }
});
 
