import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MessagingService from "../../Services/Messaging/MessagingService";

export default function ChatPage({ route, navigation }) {
  const [fromId, setFromId] = useState(null);
  const [toId, setToId] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const receiveMessage = (received) => setMessages([...messages, received]);
  MessagingService.receive(fromId, receiveMessage);

  const pushMessage = (message) =>
    setMessages(prev => [...prev, { ...message, sender: true }]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.inputView}>
          <TextInput
            style={[styles.TextInput]}
            placeholder="my id"
            placeholderTextColor="#3C2C5B"
            onChangeText={(id) => setFromId(id)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="receiver id"
            placeholderTextColor="#3C2C5B"
            onChangeText={(id) => setToId(id)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="message"
            placeholderTextColor="#3C2C5B"
            onChangeText={(message) => setMessage(message)}
          />
        </View>
        <TouchableOpacity
        onPress={() => {
          const messageToSend = {
            fromId,
            toId,
            date: new Date().toLocaleString(),
            text: message,
          };
          pushMessage(messageToSend);
          MessagingService.send(messageToSend);
        }}
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}>Send</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.messageContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[styles.message, ...(message.sender ? [styles.sender] : [])]}
          >
            <Text>{`date: ${new Date(
              message.date
            ).toLocaleTimeString()}`}</Text>
            <Text>{`from : ${message.fromId}`}</Text>
            <Text>{`to : ${message.toId}`}</Text>
            <Text>{`message : ${message.text}`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    backgroundColor: "#B4B6FC",
    height: Dimensions.get("window").height,
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
    height: 10,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    textAlign: "center",
  },
  textContainer: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "#3C2C5B",
    marginLeft: 40,
    padding: 5,
    borderRadius: 10,
    marginTop: 40,
  },
  messageContainer: {
    position: "relative",
    width: "90%",
    margin: 10,
  },
  message: {
    position: "relative",
    width: "40%",
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 2,
  },
  sender: {
    left: "65%",
  },
  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    marginTop: 5,
    color: "white",
    justifyContent: "center",
    backgroundColor: "#B3D446",
  },
  loginText: {
    color: "white",
  },
});
