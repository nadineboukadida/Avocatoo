import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font';
import { Dimensions } from 'react-native';
import profil from '../../../assets/profil.png'
import search from '../../../assets/search.png'
import searchSelected from '../../../assets/searchSelected.png'
import news from '../../../assets/news.png'
import newsSelected from '../../../assets/newsSelected.png'
import like from '../../../assets/like.png'
import likeSelected from '../../../assets/likeSelected.png'
import { useEffect } from 'react/cjs/react.production.min';
import * as Font from 'expo-font';
import Home from './Home/Home';

export default function HomePage({ route, navigation }) {
  const [page, setpage] = useState(0);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.title}>Welcome, <Text style={{ color: '#3C2C5B' , fontWeight:'500' }} >name name</Text> </Text>
          <View style={{ height: 50, padding: 5 }}>
            <Image style={styles.image} source={profil}></Image>
          </View>
        </View>
        <View style={styles.navigation}>
     
          <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>setpage(0)}>
            <Image style={styles.navigationImg} source={page !=0 ? news : newsSelected}></Image>
            <Text style={page==0 ? styles.Selectedtext :styles.basicText }>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>setpage(1)}>
            <Image style={styles.navigationImg} source={page !=1 ? search : searchSelected}></Image>
            <Text style={page==1 ? styles.Selectedtext :styles.basicText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>setpage(2)}>
            <Image style={styles.navigationImg} source={page !=2 ?like : likeSelected}></Image>
            <Text style={page==2 ? styles.Selectedtext :styles.basicText}>History</Text>

          </TouchableOpacity>


        </View>
        <View style={styles.body}>
          {page==0&&<Home></Home>}
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9EB7CF",
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    paddingVertical: 10,
  },
  containerHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 10,
    paddingRight: 20,
  },
  title: {
    fontSize: 17,
    color: "#9EA0FF",
    letterSpacing: 2,
    paddingLeft:30,
    paddingRight:20,
    backgroundColor:'white',
    padding:10,
    marginLeft:-10,
    borderTopRightRadius:20,
    borderBottomRightRadius:20

  },
  image: {
    width: 40,
    height: 40,
  },
  navigation: {
    width: Dimensions.get('window').width,
    // padding: 20,
    paddingTop:10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',

  },
  navigationImg: {
    width: 75,
    height: 75,
  },
  Selectedtext: {
      color:'#3C2C5B'
  },
  basicText: {
    color: 'white'
  },
  body: {
    paddingTop:10,
    height: '100%',
  }
})