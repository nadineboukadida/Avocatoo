import { StyleSheet, Text, View, Image, TextInput, Dimensions, ScrollView} from 'react-native'
import React from 'react'
import { color } from 'native-base/lib/typescript/theme/styled-system'
import profil from "../../../assets/profil.png";

const Messaging = ({sender}:any) => {
   const msgs = [{from:"ismail",to : "salem",content:"Ya salem marti tathrab fia"},
   {from:"ismail",to : "salem",content:"ma3adech najim nistahmil"},
   {from:"salem",to : "ismail",content:"ty ib3idni *************"},
   {from:"salem",to : "ismail",content:"ija nhamlik eni ib3id aliha"},
   {from:"ismail",to : "salem",content:"haya hani jit het bousa"},
   {from:"salem",to : "ismail",content:"mahleha e ra9da 3la kitfik ismail"},
   {from:"ismail",to : "salem",content:"haya hani jit het bousa"},
   {from:"salem",to : "ismail",content:"mahleha e ra9da 3la kitfik ismail"},
   {from:"ismail",to : "salem",content:"haya hani jit het bousa"},
   {from:"salem",to : "ismail",content:"mahleha e ra9da 3la kitfik ismail"},
   {from:"salem",to : "ismail",content:"mahleha e ra9da 3la kitfik ismail"},
   
   {from:"ismail",to : "salem",content:"haya hani jit het bousa"},
   {from:"salem",to : "ismail",content:"mahleha e ra9da 3la kitfik ismail"},
]
const msgComp=[];
msgs.forEach((e,ind)=> 
    {
        console.log(sender)
        if(sender==e.from ){ msgComp.push( <View key={ind} style={[styles.containerMsg,styles.myMsg]}>
        <Text style={{color:'black'}}>{e.content}</Text>
      </View>)}

    else {
        msgComp.push( <View key={ind} style={styles.containerMsg}>
      <Text style={{color:'white'}}>{e.content}</Text>
    </View>)
    }
    }
   )
    
  return (
<View style={styles.bigContainer}>
    <View style={styles.Receiver}>
    <Image style={styles.image} source={profil}></Image>
    <View>
    <Text style={{fontSize:17,fontWeight:'700',letterSpacing:1.5,
        marginLeft:15
}}>Salem Hamdani</Text>
        <Text style={{ marginLeft:15,color:'gray'}}>Law Professional </Text>
</View>

    </View>
    
    <View style={{ width:'100%',
        marginBottom:130,paddingVertical:20,
    }}><ScrollView>
 {msgComp.reverse()}
  </ScrollView>
    </View>
   
    <View style={styles.footer}>
    <TextInput
            style={[styles.TextInput]}
            placeholder="... write here ..."
            placeholderTextColor="white"
            // onChangeText={(problem) => setProblem(Problem)
            // }
          />
    </View>
    </View>
  )
}

export default Messaging

const styles = StyleSheet.create({
    bigContainer: {
        marginTop:5,
        alignItems:'center',
        position:'relative',
        height: Dimensions.get("window").height - 145,
        justifyContent:'space-between'
    },
    containerMsg: {
        backgroundColor:'#3B96D6',
        paddingVertical:7,
        alignSelf: 'flex-start',
        paddingHorizontal:20,
        borderRadius:10,
        maxWidth:250,
        borderBottomLeftRadius:0,
        marginTop:10

    },
    myMsg: {
        backgroundColor:'#E5E5DF',
        alignSelf:'flex-end',

        borderBottomRightRadius:0,
        borderBottomLeftRadius: 10,


        
    },
    Receiver: {
        width: "90%",
        // padding: 20,
        paddingTop: 5,
        alignItems: "center",
        paddingHorizontal: 5,
        flexDirection: "row",
        backgroundColor: "#E5E5DF",
        justifyContent:'center',
        borderRadius: 5,
        paddingBottom: 5,
        marginBottom:10,
      },
      image: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginRight:15
    },
    footer: {
        position:'absolute',
        width:'100%',
        bottom:0,
        justifyContent:'center',
        alignItems:'center'
    },
    TextInput: {
        color: "white",
        letterSpacing: 2,
        paddingLeft: 30,
        fontSize: 15,
        backgroundColor: "black",
        padding: 10,
        marginLeft: -10,
        marginTop:5,
        width:'90%',
        borderRadius:10,
        textAlign:'center'
      },
})