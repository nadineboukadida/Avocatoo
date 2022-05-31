import {IUser, User} from "./User";
import moment, {Moment} from "moment";

import {MomentDateHelper} from "../Modules/Standard/Date/MomentDateHelper";
import Ticket from "./Ticket";

export default class Message {
    id:string=''
    from:IUser|null=null
    to:IUser|null=null
    date:Moment|null=moment()
    content:string=''
    ticket:Ticket|null=null
    public static hydrateData(data:any):Message {
        let output = new Message();
        output.id = data.id
        output.from = User.hydrateData(data?.from??null)
        output.to = User.hydrateData(data?.to??null)
        output.date = MomentDateHelper.createMomentDateFromAny(data.date)
        output.content=data.content
        output.ticket=Ticket.hydrateData(data?.ticket??null)
        return output;
    }
    public static deHydrateData(data:Message|null):any{
        let output: any = {};
        if (!data) {
            return output;
        }
        output.from =data.from?.id
        output.to = data.to?.id
        output.date = MomentDateHelper.createOutputApiFromAny(data.date)
        output.content=data.content
        output.ticket=data?.ticket?.id
        return output;
    }
}