import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { color } from "native-base/lib/typescript/theme/styled-system";
import profil from "../../../assets/profil.png";
import { MesssageServiceApi } from "../../Services/Messaging/MessageServiceApi";
import Message from "../../Entity/Message";
import moment from "moment";
import { AuthContext } from "../../context/AuthContext";

const Messaging = ({ route }: any) => {
  const { idUser } = useContext(AuthContext);
  const [messages, setMessages] = useState<Message[]>([{
    content: "aaa",
    date: moment("2022-06-01T23:15:45.493Z"),
    from: "",
    id: "",
    to: "0d76f78f-0662-45ea-a317-449cba151a46",
  }]);
  const [Msg, setMsg] = useState<string>('');

  const { id } = route.params;
  const msgs = [
    { from: "ismail", to: "salem", content: "message 1" },
    { from: "ismail", to: "salem", content: "message 1" },
    { from: "salem", to: "ismail", content: "message 1" },
    { from: "salem", to: "ismail", content: "message 1" },
    { from: "ismail", to: "salem", content: "message 1" },
    { from: "salem", to: "ismail", content: "message 1" },
    { from: "ismail", to: "salem", content: "message 1" },
    { from: "salem", to: "ismail", content: "message 1" },
    { from: "ismail", to: "salem", content: "message 1" },
    { from: "salem", to: "ismail", content: "message 1" },
    { from: "salem", to: "ismail", content: "message 1" },
    { from: "ismail", to: "salem", content: "message 1" },
    { from: "salem", to: "ismail", content: "message 1" },
  ];
  const msgComp = [];

  useEffect(() => {
    (async function getData() {
      const receivedMessages = await MesssageServiceApi.getMessagesbyTicketId(
        id
      );
      
      setMessages(receivedMessages);
    })();
  }, []);
  const sendMsg = function (msg:string) {
      const current= new Message();
      current.content=msg;
      current.date= moment();
      current.from= idUser;
      current.to=id;
      const newM = messages
      newM?.push(current)
      setMessages(newM);
      console.log('mssssssssssssssssss',messages)
    };
  return (
    <View style={styles.bigContainer}>
      <View style={styles.Receiver}>
        <Image style={styles.image} source={profil}></Image>
        <View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "700",
              letterSpacing: 1.5,
              marginLeft: 15,
            }}
          >
            Salem Hamdani
          </Text>
          <Text style={{ marginLeft: 15, color: "gray" }}>
            Law Professional{" "}
          </Text>
        </View>
      </View>

      <View style={{ width: "100%", marginBottom: 130, paddingVertical: 20 }}>
        <ScrollView>
          {messages?.map((e, ind) => {
              console.log('dddddddddddddddd',idUser)

            if (idUser == e.from) {
              return (
                <View key={ind} style={[styles.containerMsg, styles.myMsg]}>
                  <Text style={{ color: "black" }}>{e.content}</Text>
                </View>
              );
            } else {
              return (
                <View key={ind} style={styles.containerMsg}>
                  <Text style={{ color: "white" }}>{e.content}</Text>
                </View>
              );
            }
          })}
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TextInput
          style={[styles.TextInput]}
          placeholder="... write here ..."
          placeholderTextColor="white"
          onChangeText={(e) => setMsg(e)}
          // }
        />
        <TouchableOpacity onPress={() => { sendMsg(Msg)}}>
          <View
            style={{
              paddingLeft: 30,
              backgroundColor: "#B3D446",
              padding: 10,
              marginTop: 5,
              borderRadius: 10,
            }}
          >
            <Text style={{ marginRight: 15 }}>Send</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Messaging;

const styles = StyleSheet.create({
  bigContainer: {
    marginTop: 5,
    alignItems: "center",
    position: "relative",
    height: Dimensions.get("window").height - 145,
    justifyContent: "space-between",
  },
  containerMsg: {
    backgroundColor: "#3B96D6",
    paddingVertical: 7,
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    borderRadius: 10,
    maxWidth: 250,
    borderBottomLeftRadius: 0,
    marginTop: 10,
  },
  myMsg: {
    backgroundColor: "#E5E5DF",
    alignSelf: "flex-end",

    borderBottomRightRadius: 0,
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
    justifyContent: "center",
    borderRadius: 5,
    paddingBottom: 5,
    marginBottom: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 15,
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    justifyContent: "space-around",
    alignItems: "center",

    flexDirection: "row",
  },
  TextInput: {
    color: "white",
    letterSpacing: 2,
    paddingLeft: 30,
    fontSize: 15,
    backgroundColor: "black",
    padding: 10,
    marginLeft: -10,
    marginTop: 5,
    width: "60%",
    borderRadius: 10,
    textAlign: "center",
  },
});
