import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  GestureResponderEvent,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import image from "../../../assets/archive/folder.png";
import image1 from "../../../assets/archive/folder1.png";
import image2 from "../../../assets/archive/folder2.png";
import image3 from "../../../assets/archive/folder3.png";
import image4 from "../../../assets/archive/folder3.png";
import image5 from "../../../assets/archive/folder3.png";


import ArchiveElement from "./ArchiveElement/ArchiveElement";

const ArchivePage = () => {
  // const [scrollUp, setscrollUp] = useState(false);
  const [shown, setshown] = useState({start:0,end:4});
  const translate=useRef(new Animated.Value(0)).current
  const list= function() 
   {
    const tab = []
    let v

    for (let i = 0; i < elements.length; i++) {
      v= i <= shown.end && i >= shown.start
        if(i%4 ==0) 
         tab.push(
          <ArchiveElement ind={i} key={i} shown={v} text={elements[i].text} image={image}/>
           ) 
           if(i%4 ==1) 
           tab.push(
            <ArchiveElement ind={i} key={i} shown={v} text={elements[i].text} image={image1}/>
             )
             if(i%4 ==2) 
             tab.push(
              <ArchiveElement ind={i} key={i} shown={v} text={elements[i].text} image={image2}/>
               )
               if(i%4 ==3) 
               tab.push(
                <ArchiveElement ind={i} key={i} shown={v} text={elements[i].text} image={image3}/>
                 )
    }
    return tab;

  }
  const elements = [
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { text: "4" },
    { text: "5" },
    { text: "6" },
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { text: "4" },
    { text: "5" },
    { text: "6" },
  ];

  let touchY = 0;
  return (
    <View
      onTouchStart={(e) => (touchY = e.nativeEvent.pageY)}
      onTouchEnd={(e) => {
        if (touchY - e.nativeEvent.pageY > 20) {
          if(shown.end+1< elements.length)
         { setshown({start : shown.start+1,end :shown.end+1})}
          console.log(shown);

        } else {
          if(shown.start-1 >= 0) {
            setshown({start : shown.start-1,end :shown.end-1})
          }
          console.log(shown);


        }
      }}
      style={styles.container}
    >
      {/* <View style={styles.header}>
        <Text>Archive</Text>
      </View> */}

      <View style={styles.folders}>
      {list()}
      </View>
    </View>
  );
};

export default ArchivePage;

const styles = StyleSheet.create({
  header: {
    height: "20%",
  },
  container: {
    display: "flex",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  Image: {},
  scrollView: {
    height: 677,
  },
  folders: {
    paddingTop:200,
    overflow:"hidden",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    width: Dimensions.get("window").width,
  },
});
