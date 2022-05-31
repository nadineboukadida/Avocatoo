import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, FlatList,
} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {useFonts} from "expo-font";
import {Dimensions} from "react-native";
import profil from "../../../../assets/profil.png";
import notif from "../../../../assets/notif.png";
import FeedTickets from './FeedTickets';
import {Spacer} from "@react-native-material/core";
import {Avatar, Button} from "native-base";

export default function HomePage({route, navigation}: any) {
    const [page, setpage] = useState(0);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <View style={styles.title}>
                        <Image
                            style={styles.image2}
                            source={notif}
                        ></Image>
                    </View>
                    <View style={{height: 50, padding: 5}} >
                        <TouchableOpacity onPress={()=>{navigation.navigate('LpProfile')}}><Avatar size="50px" source={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
                        }}  /></TouchableOpacity>

                    </View>
                </View>

                <View
                    style={{
                        width: Dimensions.get("window").width,
                        alignItems: "center",
                    }}
                >
                    <View style={styles.search}></View>
                    <View style={styles.navigation}>
                        <TouchableOpacity
                            style={[styles.navigationItem, page == 0 && styles.selected]}
                            onPress={() => setpage(0)}
                        >
                            <Text style={styles.basicText}>Feed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.navigationItem, page == 1 && styles.selected]}
                            onPress={() => setpage(1)}
                        >
                            <Text style={styles.basicText}>Tickets</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.navigationItem, page == 2 && styles.selected]}
                            onPress={() => setpage(2)}
                        >
                            <Text style={styles.basicText}>Help</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.body}>
                    {/* {page==0&&<Messaging sender='salem'></Messaging>} */}
                    {page == 1 && <>
                        <FeedTickets/>
                    </>}
                    {/* {page==1&&<Home></Home>} */}


                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    search: {},
    container: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        paddingVertical: 10,
        backgroundColor: "#F3F3F3",
    },
    containerHeader: {
        justifyContent: "space-between",
        alignItems: "center",
        width: Dimensions.get("window").width,
        flexDirection: "row-reverse",
        paddingLeft: 10,
        paddingVertical: 10,
        paddingRight: 20,
    },
    title: {
        fontSize: 17,
        color: "#BEBCF3",
        letterSpacing: 2,
        backgroundColor: "white",
        padding: 5,
        paddingHorizontal: 8,
        height: 40,
        marginRight: -10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 40,
        borderColor: "#E5E5DF",
        borderWidth: 3,
        marginLeft: -10,

    },
    image2: {
        width: 28,
        height: 28,
    },
    navigation: {
        width: "90%",
        // padding: 20,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5,
        flexDirection: "row",
        backgroundColor: "#E5E5DF",
        paddingTop: 5,
        borderRadius: 5,
        paddingBottom: 5,
    },
    navigationItem: {
        alignItems: "center",
        paddingHorizontal: 35,
        paddingVertical: 5,
        borderRadius: 5,
    },
    selected: {
        backgroundColor: "white",
    },
    navigationImg: {
        width: 75,
        height: 75,
    },
    Selectedtext: {},
    basicText: {
        color: "#3C2C5B",
    },
    body: {
        paddingTop: 10,
        height: "100%",
    },
});
