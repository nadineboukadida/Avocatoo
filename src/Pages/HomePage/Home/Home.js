import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import LPinfo from "../LPinfo/LPinfo";
import Message from "../../../Components/Message/Message";
import profil from "../../../../assets/profil.png";
import Category from "../../Feed/Category/Category";

export default function Home({navigation,route}) {
  const [Problem, setProblem] = useState("");
  const [info, setinfo] = useState("");

 
  const msgs = [
    {
      name: "Ismail Charfi",
      title: "Thank you for your help !",
      date: "2 days ago",
      image: profil,
      id:"0d76f78f-0662-45ea-a317-449cba151a46",
    },
    {
      name: "Ismail Charfi",
      title: "Hello I have this problem related to ...",
      date: "2 days ago",
      image: profil,
      id:"0d76f78f-0662-45ea-a317-449cba151a46",

    },
    {
      name: "Ismail Charfi",
      title: "I will take this to court next ...",
      date: "2 days ago",
      image: profil,
      id:"0d76f78f-0662-45ea-a317-449cba151a46",

    },
    {
      name: "Ismail Charfi",
      title: "So much happened ...",
      date: "2 days ago",
      image: profil,
      id:"0d76f78f-0662-45ea-a317-449cba151a46",

    },
  ];
  const msgsComp = [];
  const catComp = [];

  const cat = [
    {
      name: "Child Abuse",
    },
    {
      name: "Accident",
    },
    {
      name: "Fight",
    },
    {
      name: "Domestic Violence",
    },
  ];
  cat.forEach((e, ind) =>
    catComp.push(<Category color="black" key={ind} text={e.name}></Category>)
  );
  msgs.forEach((e, ind) =>
    msgsComp.push(
      <TouchableOpacity onPress={()=> navigation.navigate("chat", {id: e.id})}>
      <Message
        key={ind}
        title={e.title}
        name={e.name}
        date={e.date}
        image={e.image}
      ></Message></TouchableOpacity>
    )
  );
 
  return (
    <>
      <View style={styles.ContainerMsgs}>
        <ScrollView>
          {msgsComp.length != 0 ? (
            msgsComp
          ) : (
            <View style={styles.Empty}>
              <Text style={{ fontSize: 15, fontWeight: "700" }}>
                You will find record of your old conversations in Here
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Need Help ?</Text>
        </View>
        <View style={{ paddingTop: 10 }}>
          <TextInput
            style={[styles.TextInput]}
            placeholder="start by writing down your problem here .."
            placeholderTextColor="black"
            onChangeText={(problem) => setProblem(Problem)}
          />
        </View>
        <View style={{ marginTop: 5 }}>
          <ScrollView horizontal={true}>{catComp}</ScrollView>
        </View>
        <View style={{ width: "80%", paddingTop: 5 }}>
          <Text style={styles.title1}>chat with a law professional</Text>
        </View>
      
        {/* <View style={styles.containermain}>
                    <View style={{backgroundColor:'white',width:350,height:150,padding:20,borderRadius:20}}>
                   <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={styles.titleLp}>Name Surname</Text>
                    <TouchableOpacity> 
                        <View style={{paddingVertical:5,paddingHorizontal:10, backgroundColor:'#CEFF2E',borderRadius:20}}>

                        <Text>Message</Text>
                        </View>

                     </TouchableOpacity>
                    </View>
                    <Text style={styles.bodyLp}>info Lp info info Lpinfo Lp info info 
                    Lpinfo Lp info infoinfo Lp info info Lpinfo info Lp info info Lpinfo Lp info info LpLp info info Lpinfo Lp info info Lp Lp</Text>


                    </View>
            </View> */}
               <TouchableOpacity
          style={{ alignItems: "center" }}
        //   onPress={() => setinfo(i)}
        >
            <View style={styles.button}>
                <Text style={styles.btnText}>Start Now</Text>
            </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ContainerMsgs: {
    maxHeight: 255,
    marginBottom: 20,
    marginTop: 30,
  },
  titleLp: {
    textAlign: "center",
    fontSize: 17,
  },
  bodyLp: {
    padding: 10,
  },
  containermain: {
    width: "100%",
    height: 170,
    justifyContent: "center",
    alignItems: "center",
  },


  scrollView: {},
  TextInput: {
    color: "white",
    letterSpacing: 2,
    paddingLeft: 30,
    fontSize: 15,
    backgroundColor: "#E5E5DF",
    padding: 20,
    marginLeft: -10,
    marginTop:5,
  },
  container: {
    alignItems: "flex-end",
    paddingTop: 5,
  },
  title: {
    fontSize: 17,
    color: "white",
    letterSpacing: 2,
    paddingLeft: 30,
    paddingRight: 20,
    backgroundColor: "#6EBEF5",
    padding: 10,
    marginLeft: -10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: "50%",
  },
  title1: {
    fontSize: 17,
    color: "white",
    letterSpacing: 2,
    paddingLeft: 30,

    backgroundColor: "#6EBEF5",
    padding: 10,
    marginLeft: -10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginTop:5
  },
  Empty: {
    marginTop: 5,
    backgroundColor: "#E9F0F5",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  button: {
      marginTop:20,
      backgroundColor:"#AFC4A8",
      borderRadius:10,
      padding:10
  },
  btnText: {
      fontSize:17,
      color:'white',
      paddingHorizontal:35,
      paddingVertical:0
  }
});
