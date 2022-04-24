import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Button from '../Components/Button'

export default function RegisterPage({ changeAuth }) {
    const register = async function () {
        try {
            const response = await fetch('http://10.0.2.2:5000/auth/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            const json = response;
            console.log(json)
        }
        catch (e) {
            console.error(e)
        }

    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>

            <View style={styles.textContainer}>
                <Text style={styles.title} >Sign up</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={[styles.TextInput]}
                        placeholder="Email"
                        placeholderTextColor="#3C2C5B"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="#3C2C5B"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>


            </View>
            <TouchableOpacity onPress={() => register()} style={styles.registerBtn}>
                <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
            <View style={[styles.containerButtons, { justifyContent: 'flex-end' }]}>

                <Button align={1} text='Login' color={'#3C2C5B'} onclick={changeAuth}></Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center'

    },
    image: {
        width: '40%',

        resizeMode: 'contain'

    },
    imageContainer: {
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        height: '50%',

    },
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,

    },
    inputView: {
        backgroundColor: "white",
        borderRadius: 10,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        textAlign: 'center',


    },
    textContainer: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: '#3C2C5B',
        padding: 5,
        borderRadius: 10,
        marginTop: 40

    },
    forgot_button: {
        height: 20,
        color: 'white',
        marginBottom: 10,
    },
    registerBtn: {
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        marginTop: 50,
        color: 'white',
        justifyContent: "center",
        backgroundColor: "#B3D446",

    },
    registerText: {
        color: 'white'
    },
    containerButtons: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',

        alignContent: 'flex-end',
        height: 80

    }
})