import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, {useState} from 'react'
import LandingElement from './LandingElement'
import problem from "../../assets/problem.png"
import solution from "../../assets/solution.png"
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import Constants from 'expo-constants';
console.log(Constants.deviceName);
export default function LandingPage({navigation}) {
 
    const [slide, setslide] = useState(0);
    const [login, setlogin] = useState(true);

    const changeAuth = ()=> {
      setlogin(!login)
    }
    const next = function(){
      if(slide<2){
           setslide(slide+1);
      }
      console.log(slide)
   
    }
    const skip = function(){
      setslide(2)
    }
  return (
    <View style={[styles.container,{transform:[{ translateX:slide?(-slide)* Dimensions.get('window').width : 0}]
    }]} >
<LandingElement onpressNext={next} onpressSkip={skip} image = {problem} text= "No neet to panic in serious situations anymore.. Avocatoo is here"/>
<LandingElement onpressNext={next} onpressSkip={skip} button={1} image = {solution} text= "We provide you with all the law informations you need for your situation"/>
{!login? <LoginPage navigation={navigation} changeAuth={changeAuth}></LoginPage> : <RegisterPage  navigation={navigation}  changeAuth={changeAuth}></RegisterPage>}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      width:'300%',
      height:'100%',
      flexDirection:'row',
      backgroundColor:'#B4B6FC',
      // flex : 1,
     
      
      
    //  flex: 1,
     
    }
    })