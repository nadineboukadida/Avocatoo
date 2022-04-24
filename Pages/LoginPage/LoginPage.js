import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import login from "../../assets/login.png"
import Button from '../Components/Button'
export default function LoginPage({ changeAuth,navigation }) {
    const login = async function () {
        try {
            const response = await fetch('http://10.0.2.2:5000/auth/login', {
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
            const json = response.json();
            console.log(json)
            navigation.push('home')

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
                <Text style={styles.title} >Sign in</Text>
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
                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={() => login()} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={[styles.containerButtons, { justifyContent: 'flex-end' }]}>
                <Button align={1} text='Register' color={'#3C2C5B'} onclick={changeAuth}></Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerButtons: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',

        alignContent: 'flex-end',
        height: 80

    },
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
    loginBtn: {
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        marginTop: 50,
        color: 'white',
        justifyContent: "center",
        backgroundColor: "#B3D446",

    },
    loginText: {
        color: 'white'
    }
})