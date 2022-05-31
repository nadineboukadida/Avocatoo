import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Post from './Post.tsx/Post'
import Category from './Category/Category'
import Tag from '../../Components/Tags/Tag'
import LPinfo from '../HomePage/LPinfo.js/LPinfo'
const LawP = [
  {
    name: "nadine jones",
    gender: "F",
    id: 1,
    bio: "Porro itaque, consequuntur vero optio et fugit voluptas quaerat facere ad delectus quis a ",
  },
  {
    name: "nadine jones",
    id: 2,
    gender: "F",
    bio: "Porro itaque, consequuntur vero optio et fugit voluptas quaerat facere ad delectus quis a ",
  },
  {
    name: "nadine jones",
    gender: "M",
    id: 3,
    bio: "Porro itaque, consequuntur vero optio et fugit voluptas quaerat facere ad delectus quis a ",
  },
  {
    name: "nadine jones",
    gender: "M",
    id: 4,
    bio: "Porro itaque, consequuntur vero optio et fugit voluptas quaerat facere ad delectus quis a ",
  },
  {
    name: "nadine jones",
    gender: "F",
    id: 5,
    bio: "Porro itaque, consequuntur vero optio et fugit voluptas quaerat facere ad delectus quis a ",
  },
  {
    name: "nadine jones",
    gender: "M",
    id: 6,
    bio: "Porro itaque, consequuntur vero optio et fugit voluptas quaerat facere ad delectus quis a ",
  },
];
const Feed = () => {
  const listP = function () {
    const tab = [];
    for (let i = 0; i < LawP.length; i++) {
      tab.push(
        <TouchableOpacity
          key={i}
          style={{ alignItems: "center" }}
          // onPress={() => setinfo(i)}
        >
          <LPinfo info={LawP[i]}></LPinfo>
        </TouchableOpacity>
      );
    }
    return tab;
  };
 const cat = [{name:'category1'},{name:'category2'},{name:'category2'}];
 const catComp=[]
 cat.forEach((e,ind)=> {
     
      catComp.push( <Category key={ind} text={e.name} color ={'#FF6957'}></Category>)
 })
  return (
    <View style={{paddingBottom:110}}>
      <View style={{width:'90%', alignSelf:'center',paddingBottom:5}}>
          <ScrollView horizontal={true}>
      {catComp}



     </ScrollView>
</View>
<View style={styles.LPlist}>
          <ScrollView horizontal={true} >
            {listP()}
          </ScrollView>
        </View>
      <ScrollView>

     <Post color1={'#A6D3F2'} color2= {'purple'} color3={'#F7D88C'}></Post>
     <Post color1={'#A6D3F2'} color2= {'#FF6957'} color3={'black'}></Post>
     <Post color1={'#A6D3F2'} color2= {'#FF6957'} color3={'#F7D88C'}></Post>
     <Post color1={'#A6D3F2'} color2= {'#FF6957'} color3={'#F7D88C'}></Post>
    
     </ScrollView>

    </View>
  )
}

export default Feed

const styles = StyleSheet.create({  LPlist: {
  width: "100%",
  // flex: 1,
  paddingTop: 1,
},})