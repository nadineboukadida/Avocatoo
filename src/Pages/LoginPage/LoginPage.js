import {View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity} from 'react-native'
import React, {useContext, useState} from 'react'
import But from '../../Components/Button'
import {AuthContext} from '../../context/AuthContext';
import {Box, Button, FormControl, Icon, Input, WarningOutlineIcon} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import logo from '../../../assets/logo/logo.png'
export default function LoginPage({navigation}) {

    const {login} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({email: false, button: true});
    const [show, setShow] = React.useState(false);
    const handleBlur = (event) => {
            if (email.includes('@')) {
                setError({...error, email: false,button: false})
            } else setError({...error, email: true,button: true});
    }
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={logo} />
                <Text style={styles.logoText}>AVOCATOO</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Se connecter</Text>
                <Box alignItems="center">
                    <FormControl isInvalid={error.email} w="75%" maxW="300px">
                        <FormControl.Label>Email</FormControl.Label>
                        <Input

                               w={{
                                   base: "75%",
                                   md: "25%"
                               }}
                               InputLeftElement={
                                   <Icon as={<MaterialIcons name="person"/>}
                                         size={5}
                                         ml="2"
                                         color="#2b2939"/>}
                               value={email}
                               onChangeText={(email) => setEmail(email)}
                               placeholder="Email"
                               _focus={{backgroundColor: 'white', borderColor: "#bebcf3"}}
                               _light={{
                                   placeholderTextColor: "black"
                               }} _dark={{
                            placeholderTextColor: "blueGray.50"
                        }}
                               onBlur={(e) => handleBlur(e)}/>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs"/>}>
                                Format Email non valide
                            </FormControl.ErrorMessage>
                        <FormControl.Label>Password</FormControl.Label>
                    </FormControl>
                    <FormControl w="75%" maxW="300px">
                    <Input
                        w={{
                            base: "75%",
                            md: "25%",
                        }} type={show ? "text" : "password"}
                        InputRightElement={<Icon
                            as={<MaterialIcons name={show ? "visibility" : "visibility-off"}/>}
                            size={5} mr="2" color="#2b2939" onPress={() => setShow(!show)}/>}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        placeholder="mot de pass"
                        _focus={{backgroundColor: 'white', borderColor: "#bebcf3"}}
                        _light={{
                            placeholderTextColor: "black"
                        }} _dark={{
                        placeholderTextColor: "blueGray.50"
                    }}/>
                    </FormControl>
                </Box>
                <Button size={"lg"} style={styles.loginBtn} onPress={() => login(email, password)}
                        isDisabled={error.button}>
                    <Text style={styles.loginText}>Connecter
                    </Text>
                </Button>
            </View>

            <View style={[styles.containerButtons, {justifyContent: 'flex-end'}]}>
                <But align={1} text="S'inscrire" color={'#FF6957'}
                     onclick={() => navigation.navigate('Register')}></But>
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
        backgroundColor: '#000000',

        height: Dimensions.get('window').height,
    },
    image: {
        marginTop:50,
        paddingTop:0,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        color:"white"
    },
    logoText:{
        color:"white",
        marginTop:20,
        fontFamily:"",
        fontWeight:"bold"
    },
    imageContainer: {
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        height: '50%',

    },
    title: {
        fontSize: 30,
        color: '#000000',
        textAlign: 'center',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        fontWeight: "bold"
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
        backgroundColor: '#FFFFFF',
        padding: 5,
        borderRadius: 10,
        marginTop: 30,
        opacity: 0.8


    },
    forgot_button: {
        marginTop: '5%',
        height: 20,
        color: '#FFFFFF',
        marginBottom: 10,
        fontWeight: "bold"
    },
    loginBtn: {
        width: "60%",
        height: 50,
        alignItems: "center",
        marginTop: 10,
        marginBottom:10,
        color: 'black',
        justifyContent: "center",
        backgroundColor: "#FF6957",

    },
    loginText: {
        color: '#000000',
        fontWeight: "bold"
    }
})