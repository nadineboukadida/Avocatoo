import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LPinfo from '../LPinfo.js/LPinfo';

export default function Home() {
    const [Problem, setProblem] = useState('');
    const [info, setinfo] = useState('');

    const LawP = [{
        name: "nadine jones", gender: "F",
        id: 1,
        bio: "Porro itaque, consequuntur vero optio et fugit voluptas quaerat facere ad delectus quis a "
    },
    {
        name: "nadine jones",
        id: 2,
        gender: "F",
        bio: "Porro itaque, consequuntur vero optio et fugit voluptas quaerat facere ad delectus quis a "
    },
    {
        name: "nadine jones", gender: "M",
        id: 3,
        bio: "Porro itaque, consequuntur vero optio et fugit voluptas quaerat facere ad delectus quis a "
    },
    {
        name: "nadine jones", gender: "M",
        id: 4,
        bio: "Porro itaque, consequuntur vero optio et fugit voluptas quaerat facere ad delectus quis a "
    }, {
        name: "nadine jones", gender: "F",
        id: 5,
        bio: "Porro itaque, consequuntur vero optio et fugit voluptas quaerat facere ad delectus quis a "
    }, {
        name: "nadine jones", gender: "M",
        id: 6,
        bio: "Porro itaque, consequuntur vero optio et fugit voluptas quaerat facere ad delectus quis a "
    },
    ]

    const listP = function () {
        const tab = []
        for (let i = 0; i < LawP.length; i++) {
            tab.push(
                <TouchableOpacity key={i} style={{ alignItems: 'center' }} onPress={() => setinfo(i)}>

                    <LPinfo info={LawP[i]}></LPinfo></TouchableOpacity>)

        }
        return tab;
    }
    return (
        <View >

            <View style={styles.container}>
                <Text style={styles.title}>Need Help ?</Text>
            </View>
            <View style={{ paddingTop: 10 }}>
                <TextInput
                    style={[styles.TextInput]}
                    placeholder="start by writing down your problem here .."
                    placeholderTextColor="white"
                    onChangeText={(problem) => setProblem(Problem)}
                />
            </View>

            <View style={{ width: '80%', paddingTop: 10 }}>
                <Text style={styles.title1}>choose your law professional</Text>
            </View>
            <View style={styles.LPlist}>
                <ScrollView horizontal={true} style={styles.scrollView}>
                    {listP()}

                </ScrollView>

            </View>
                <View style={styles.containermain}>
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
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleLp: {
   textAlign:'center',
   fontSize:17

    },
    bodyLp:{
padding:10
    },
    containermain: {
        width: '100%',
        height:170,
        justifyContent:'center',
        alignItems:'center'
    },
    LPlist: {
        width: '100%',
        // flex: 1,
        paddingTop: 20
    },

    scrollView: {

    },
    TextInput: {
        color: "white",
        letterSpacing: 2,
        paddingLeft: 30,
        fontSize: 15,
        backgroundColor: '#6794BD',
        padding: 20,
        marginLeft: -10,

    },
    container: {
        alignItems: 'flex-end',
        paddingTop: 5,
    },
    title: {
        fontSize: 17,
        color: "white",
        letterSpacing: 2,
        paddingLeft: 30,
        paddingRight: 20,
        backgroundColor: '#3C2C5B',
        padding: 10,
        marginLeft: -10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        width: '50%',

    },
    title1: {
        fontSize: 17,
        color: "white",
        letterSpacing: 2,
        paddingLeft: 30,

        backgroundColor: '#3C2C5B',
        padding: 10,
        marginLeft: -10,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,

    },
})