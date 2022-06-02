import { io } from "socket.io-client";
import {API_PATH} from "../../../api-path";
import Message from "../../Entity/Message";
import { StandardFetcher } from "../Fetcher/StandardFetcher";

const BASE_PATH = API_PATH + "/messages";

export class MesssageServiceApi{
    static socket = io(API_PATH)

    static send(message:Message) {
        this.socket.emit('msgToServer', message)
    }

    static receive(id:string, callback:( message: Message) => void){
        this.socket.on(`client-${id}`, message => callback(message))
    }


    static async getMessagesbyTicketId(id: string): Promise<Message[]> {
        const response = await StandardFetcher.fetch(`${BASE_PATH}/ticket/${id}`);
        let messages: Message[] = response.data;
        return messages;
      }
}