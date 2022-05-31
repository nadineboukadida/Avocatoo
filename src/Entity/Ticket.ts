import Question from "./Question";
import {User} from "./User";
import Message from "./Message";
import moment, {Moment} from "moment";
import {MomentDateHelper} from "../Modules/Standard/Date/MomentDateHelper";

export default class Ticket{
    id:string=''
    ieRead:boolean=false
    isTyping:boolean=false
    question:Question|null=null
    closedAt:Moment|null=moment()
    closed:boolean=false
    lp:User|null=null
    messages:Message[]=[]
    public static hydrateData(data:any) {
        let output = new Ticket();
        output.id = data.id
        output.ieRead = data.ieRead
        output.isTyping = data.isTyping
        output.question = Question.hydrateData(data.question)
        output.lp=User.hydrateData(data.lp)
        output.closed=data.closed
        output.closedAt=MomentDateHelper.createMomentDateFromAny(data.closedAt)
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