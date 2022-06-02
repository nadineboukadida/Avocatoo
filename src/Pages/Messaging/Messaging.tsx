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
import React, { useContext, useEffect, useRef, useState } from "react";
import profil from "../../../assets/profil.png";
import { MesssageServiceApi } from "../../Services/Messaging/MessageServiceApi";
import Message from "../../Entity/Message";
import moment from "moment";
import { AuthContext } from "../../context/AuthContext";

const Messaging = ({ route }: any) => {

  const myTextInput = useRef()
  const { userId } = useContext(AuthContext);
  console.log("userId: ", userId)
  
  MesssageServiceApi.receive(userId, (message) => {
    const newMessages = messages;
    newMessages.push(message);
    setMessages(newMessages);
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      content: "hi, thanks for reaching us out",
      date: moment("2022-06-01T23:15:45.493Z"),
      from: "03ae9464-51c0-44fb-8734-5b8935526da9",
      to: userId,
      ticket: "0d76f78f-0662-45ea-a317-449cba151a46",
    },
    {
      content: "thanks alot",
      date: moment("2022-06-01T23:15:45.493Z"),
      from: userId ,
      to: "03ae9464-51c0-44fb-8734-5b8935526da9",
      ticket: "0d76f78f-0662-45ea-a317-449cba151a46" 
    }
  ]);

  const [Msg, setMsg] = useState<string>("");
  const [refresh, setRefresh] = useState(false)
  const { id } = route.params;

  useEffect(() => {
    (async function getData() {
      const receivedMessages = await MesssageServiceApi.getMessagesbyTicketId(
        id
      );
      console.log(receivedMessages)
      const newMessages = [...messages, ...receivedMessages];
      setMessages(newMessages);
    })();
  }, [refresh]);

  const sendMsg = function (msg: string) {
    const message: Message = {
      content: msg,
      date: moment(),
      from: userId,
      to: "03ae9464-51c0-44fb-8734-5b8935526da9",
      ticket: id,
    };
    MesssageServiceApi.send(message)
    setRefresh(prev => !prev)
    // @ts-ignore
    myTextInput.current.clear()
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
            let isSender = false;
            if(typeof e.from == "string"){
              isSender = userId == e.from
            }
            if (typeof e.from != "string") {
              isSender = userId == e.from?.id
            }
            if (isSender) {
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
          ref={myTextInput}
          placeholder="... write here ..."
          placeholderTextColor="white"
          onChangeText={(e) => setMsg(e)}
          // }
        />
        <TouchableOpacity
          onPress={() => {
            sendMsg(Msg);
          }}
        >
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
