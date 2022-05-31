import React from 'react';
import {View, SafeAreaView, StyleSheet, Dimensions, Image} from 'react-native';
// @ts-ignore
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';
import {Icon} from "native-base";
import notif from "../../../assets/notif.png";
import profil from "../../../assets/profil.png";

const ProfileScreen = ({navigation}:any) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerHeader}>
                <View  style={{ height: 50, padding: 5 }} >
                    <Icon as={<MaterialIcons name="edit"/>} color="#777777" size={7} onPress={()=>{navigation.navigate('EditProfile')}} />
                </View>
                <View style={{ height: 50, padding: 5 }}>
                    <Icon as={<MaterialIcons name="home"/>} color="#777777" size={7}/>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image
                        source={{
                            uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                        }}
                        size={80}
                    />
                    <View style={{marginLeft: 20}}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5,
                        }]}>John Doe</Title>
                        <Caption style={styles.caption}>@j_doe</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <MaterialIcons name="location-city" color="#777777" size={20}/>
                    <Text style={{color: "#777777", marginLeft: 10}}>Kolkata, India</Text>
                </View>
                <View style={styles.row}>
                    <MaterialIcons name="phone" color="#777777" size={20}/>
                    <Text style={{color: "#777777", marginLeft: 10}}>+91-900000009</Text>
                </View>
                <View style={styles.row}>
                    <MaterialIcons name="email" color="#777777" size={20}/>
                    <Text style={{color: "#777777", marginLeft: 10}}>john_doe@email.com</Text>
                </View>
            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>₹140.50</Title>
                    <Caption>Wallet</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>12</Title>
                    <Caption>Orders</Caption>
                </View>
            </View>

            <View style={styles.menuWrapper}>

                <TouchableRipple onPress={() => {
                }}>
                    <View style={styles.menuItem}>
                        <Icon name="credit-card" color="#FF6347" size={25}/>
                        <Text style={styles.menuItemText}>Payment</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {
                }}>
                    <View style={styles.menuItem}>
                        <Icon name="account-check-outline" color="#FF6347" size={25}/>
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {
                }}>
                    <View style={styles.menuItem}>
                        <Icon name="settings-outline" color="#FF6347" size={25}/>
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }, containerHeader: {
        justifyContent: "space-between",
        alignItems: "center",
        width: Dimensions.get("window").width,
        flexDirection: "row-reverse",
        paddingLeft: 10,
        paddingVertical: 10,
        paddingRight: 20,
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});