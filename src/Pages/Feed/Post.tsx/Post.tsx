import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import profil from "../../../../assets/girl.png";
import Tag from "../../../Components/Tags/Tag";

// style={styles.}
const Post = ({color1,color2,color3}:any) => {
  return (
    <View style={styles.PostContainer}>
    
      <View style={[{backgroundColor: color1},styles.Container]}>
          <View style={styles.tags}>
          <ScrollView horizontal={true} style={{}}>
             
  <Tag color ={color2} text={"tagtag"}></Tag>
              <Tag text={"olaola"} color ={color2}></Tag>
              <Tag text={"sml Jabri"} color ={color3}></Tag>
              <Tag text={"sml Jabri"} color ={color3}></Tag>

            
              </ScrollView>
          </View>
        <View style={styles.Header}>
          <View style={{flexDirection:"row",
          width:'50%',justifyContent:"space-around",alignItems:"center"}}>
            <Image style={styles.image} source={profil}></Image>
            <View style={{}}>
            <Text style={{fontSize:16, fontWeight:'700'}}>Salem Hamdani</Text>
            <Text style={{color:'white'}}>2 days ago</Text>

            </View>
          </View>
        </View>
        <View style={styles.Body}>
        <Text style={{color:'black'}}> Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Dolores perferendis minus, 
             atque et tempora</Text>

        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  PostContainer: {
      marginBottom:5,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  Container: {
    height: 190,
    width: "90%",
    padding: 15,
    paddingTop:15,
    borderRadius: 10,
    justifyContent:'space-between'
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 43,
    height: 43,
    borderRadius: 40,
    borderColor: "white",
    borderWidth: 3,
    marginLeft: -10,
  },
  tags: {
      flexDirection:"row",
      overflow:'scroll',
      width:'90%',
      alignSelf:'center',
     
  },
  Body:{
      padding:10,
      paddingTop:0,
      marginTop:1,
    borderRadius: 10,


  }
});
