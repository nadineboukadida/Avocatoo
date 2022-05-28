import Question from "./Question";
import {User} from "./User";
import Message from "./Message";

export default class Ticket{
    id:number=0
    ieRead:boolean=false
    isTyping:boolean=false
    question:Question|null=null
    lawProfessional:User|null=null
    messages:Message[]=[]
    public static hydrateData(data:any) {
        let output = new Ticket();
        output.id = data.id
        output.ieRead = data.ieRead
        output.isTyping = data.isTyping
        output.question = Question.hydrateData(data.question)
        output.lawProfessional=User.hydrateData(data.lawProfessional)
        output.messages=data.messages?.length?data.messages.map((data:any)=>Message.hydrateData(data)):[]
        return output;
    }
    public static deHydrateData(data:Ticket|null):any{
        let output: any = {};
        if (!data) {
            return output;
        }
        output.ieRead = data.ieRead
        output.isTyping = data.isTyping
        output.question = Question.hydrateData(data.question)
        return output
    }
}