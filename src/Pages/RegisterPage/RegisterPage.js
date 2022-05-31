import {View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity} from 'react-native'
import React, {useContext, useState} from 'react'
import But from '../../Components/Button'
import {Box, Button, FormControl, Icon, ScrollView, Input, WarningOutlineIcon} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {AuthContext} from "../../context/AuthContext";
import logo from "../../../assets/logo/logo.png";
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import Moment from "moment";
import { useToast } from 'native-base';
import toast from "react-native/Libraries/Components/ToastAndroid/ToastAndroid";


export default function RegisterPage({navigation}) {
    const {register} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const[LgnB,setLgnb]=useState(true)
    const [password, setPassword] = useState('');
    const [error, setError] = useState({email: false, password: false, phone: false});
    const [show, setShow] = React.useState(false);
    const [infos,setInfos]=useState({firstName:'',lastName:''});
    const passwordRegex = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$");
    const emailRegex = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$");
    const numberReg = new RegExp("^[0-9]+$");
    const toast = useToast();
    const handleChange=(value, name)=>{
        switch (name){
            case "firstName": setInfos({...infos,firstName: value});
            break;
            case "lastName":setInfos({...infos,lastName: value});
            break;
            default:break;
        }
    };
    const handleBlur = (event, name) => {
        if (name == "email") {
            if (emailRegex.test(email)) {
                setError({...error, email: false})
            } else {
                setError({...error, email: true})
            };
        }
        if (name == "password") {
            if (passwordRegex.test(password)) {

                setError({...error, password: false});
            } else setError({...error, password: true});

        }
        if (name == "phone") {
            if (numberReg.test(phone)) {
                setError({...error, phone: false});
            } else setError({...error, phone: true});
        }
        if (!error.email && !error.password&&!error.phone)
            setLgnb(true);
        else setLgnb(false);
    }
    Moment.locale('en');
    const handleRegister=async () => {
        const user = {email, password, phone, ...infos, dateOfBirth: Moment(dateOfBirth).format('YYYY-MM-DD')}
        const res = await register(user);
        if (res.status==true) {
            navigation.navigate('Login')
        }else {
            toast.show({
                title: res.msg,placement: "top"
            })
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={logo}/>
                <Text style={styles.logoText}>AVOCATOO</Text>
            </View>
            <View style={styles.textContainer}>
                <Box alignItems="center" style={{width: "100%",}}>
                    <ScrollView maxW="100%" _contentContainerStyle={{
                        width: "100%",
                        px: "10px",
                        alignItems: 'center'
                    }}>
                        <Text style={styles.title}>S'inscrire</Text>
                        <FormControl isInvalid={false} w="75%" maxW="300px">
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
                                onBlur={(e) => handleBlur(e, "email")}/>

                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs"/>}>
                                Format Email non valide
                            </FormControl.ErrorMessage>

                        </FormControl>
                        <FormControl w="75%" maxW="300px">
                            <FormControl.Label>Prenom</FormControl.Label>
                            <Input
                                w={{
                                    base: "75%",
                                    md: "25%",
                                }}
                                value={infos.firstName}
                                onChangeText={(firstName) => handleChange(firstName,'firstName')}
                                placeholder="Prenom"
                                _focus={{backgroundColor: 'white', borderColor: "#bebcf3"}}
                                _light={{
                                    placeholderTextColor: "black"
                                }} _dark={{
                                placeholderTextColor: "blueGray.50"
                            }}/>
                            <FormControl.Label>Nom</FormControl.Label>
                            <Input
                                w={{
                                    base: "75%",
                                    md: "25%",
                                }}
                                value={infos.lastName}
                                onChangeText={(lastName) => handleChange(lastName,'lastName')}
                                placeholder="Nom"
                                _focus={{backgroundColor: 'white', borderColor: "#bebcf3"}}
                                _light={{
                                    placeholderTextColor: "black"
                                }} _dark={{
                                placeholderTextColor: "blueGray.50"
                            }}/>

                            <FormControl.Label>Date de naissance</FormControl.Label>

                            <Icon as={<MaterialIcons name="date-range"/>}
                                  size={7}
                                  color="#2b2939"
                                  onPress={()=>{DateTimePickerAndroid.open({mode:"date", value:dateOfBirth,onChange:(event,date)=>setDateOfBirth(date)})}}
                            />
                        </FormControl>
                        <FormControl isInvalid={false} w="75%" maxW="300px">
                            <FormControl.Label>Telephone</FormControl.Label>
                            <Input
                                w={{
                                    base: "75%",
                                    md: "25%",
                                }} type="text"
                                InputLeftElement={<Icon
                                    as={<MaterialIcons name="phone"/>}
                                    size={5}
                                    ml="2" color="#2b2939"/>}
                                value={phone}
                                onChangeText={(phone) => setPhone(phone)}
                                placeholder="Telephone"
                                _focus={{backgroundColor: 'white', borderColor: "#bebcf3"}}
                                _light={{
                                    placeholderTextColor: "black"
                                }} _dark={{
                                placeholderTextColor: "blueGray.50"
                            }}
                                onBlur={(e) => handleBlur(e, "phone")}/>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs"/>}>
                                numero invalide
                            </FormControl.ErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={false} w="75%" maxW="300px">
                            <FormControl.Label>Mot de pass</FormControl.Label>
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
                                placeholder="Mot de pass"
                                _focus={{backgroundColor: 'white', borderColor: "#bebcf3"}}
                                _light={{
                                    placeholderTextColor: "black"
                                }} _dark={{
                                placeholderTextColor: "blueGray.50"
                            }}
                                onBlur={(e) => handleBlur(e, "password")}/>
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs"/>}>
                                Min 8 caracteres|1MAJ|1MIN|1Num
                            </FormControl.ErrorMessage>
                        </FormControl>
                        <Button size={"lg"} style={styles.loginBtn} onPress={() => handleRegister()}
                                isDisabled={false}>
                            <Text style={styles.loginText}>
                                Enregistrer
                            </Text>
                        </Button>
                    </ScrollView>

                </Box>

            </View>
            <View style={[styles.containerButtons, {justifyContent: 'flex-end'}]}>

                <But align={1} text='Login' color={'#FF6957'} onclick={() => navigation.navigate('Login')}></But>
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
        marginTop: 50,
        paddingTop: 0,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        color: "white"
    },
    logoText: {
        color: "white",
        marginTop: 20,
        fontFamily: "",
        fontWeight: "bold"
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
        backgroundColor: '#EBE7E3',
        padding: 5,
        borderRadius: 10,
        marginTop: "10%",
        opacity: 0.8,
        maxHeight: "60%",
        minHeight:"55%"
    },
    loginBtn: {
        width: "100%",
        height: 50,
        alignItems: "center",
        color: 'black',
        justifyContent: "flex-start",
        backgroundColor: "#bebcf3",
        marginTop:20,
    },
    loginText: {
        color: '#000000',
        fontWeight: "bold",
        width: "100%"
    }
})