import { io } from "socket.io-client";
import { API_PATH } from "../../../api-path";


export default class MessagingService {
    static socket = io(API_PATH)

    static send(payload) {
        this.socket.emit('msgToServer', payload)
    }

    static receive(user, callback){
        this.socket.on(`client-${user}`, message => callback(message))
    }
}