import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet, Dimensions,
} from 'react-native';

import {useTheme} from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import ImagePicker from 'react-native-image-crop-picker';
// @ts-ignore
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {Icon} from "native-base";

const EditProfileScreen = ({navigation}:any) => {

    const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
    const {colors} = useTheme();
    const [infos,setInfos]=useState({firstName:'',lastName:'',address:'',phone:''});
    const handleChange=(value:any, name:string)=>{
        switch (name){
            case "firstName": setInfos({...infos,firstName: value});
                break;
            case "lastName":setInfos({...infos,lastName: value});
                break;
            case "address":setInfos({...infos,address: value});
                break;
            case "phone":setInfos({...infos,phone: value});
                break;
            default:break;
        }
        console.log(infos)
    };
    const handleSave=()=>{

    }
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={{ height: 50, padding: 5 ,flexDirection: "row",alignItems: "center"}}>
                    <Icon as={<MaterialIcons name="arrow-back"/>} color="#777777" size={7} onPress={()=>{navigation.navigate('LpProfile')}}/>
                    <Text style={{fontWeight:"bold"}}>retourner</Text>
                </View>
            </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => {}}>
                        <View
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <ImageBackground
                                source={{
                                    uri: image,
                                }}
                                style={{height: 100, width: 100}}
                                imageStyle={{borderRadius: 15}}>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <MaterialIcons name="camera" color="#777777" size={35}/>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                        Salem Hamdani
                    </Text>
                </View>

                <View style={styles.action}>
                    <TextInput
                        placeholder="Prenom"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        value={infos.firstName}
                        onChangeText={(value)=>{handleChange(value,"firstName")}}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Nom"
                        value={infos.lastName}
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        onChangeText={(value)=>{handleChange(value,"lastName")}}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Telephone"
                        placeholderTextColor="#666666"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        value={infos.phone}
                        onChangeText={(value)=>{handleChange(value,"phone")}}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                    />
                </View>

                <View style={styles.action}>
                    <TextInput
                        placeholder="Addresse"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        value={infos.address}
                        onChangeText={(value)=>{handleChange(value,"address")}}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                    />
                </View>

                <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
                    <Text style={styles.panelButtonTitle}>Enregistrer</Text>
                </TouchableOpacity>
        </View>
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#666666',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal:10
    },containerHeader: {
        justifyContent: "space-between",
        alignItems: "center",
        width: Dimensions.get("window").width,
        flexDirection: "row",
        paddingLeft: 10,
        paddingVertical: 10,
        paddingRight: 5,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});