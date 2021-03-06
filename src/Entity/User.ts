import  {Moment} from "moment";
import {MomentDateHelper} from "../Modules/Standard/Date/MomentDateHelper";
import Question from "./Question";
import {LpData} from "./LpData";
import {Post} from "./Post";
import Ticket from "./Ticket";
export interface IUser{
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber:string,
    email:string,
    userName:string,
    dateOfBirth:Moment|null,
    isOnline: boolean,
    questions:Question[]|[],
    lpData:LpData |null,
    posts: Post[]|null,
    lpTickets: Ticket[]|null,
}
export class User implements IUser{
    id=''
    firstName=''
    lastName=''
    phoneNumber=''
    email=''
    userName=''
    dateOfBirth:Moment|null=null
    isOnline=false
    questions=[]
    posts=null
    lpTickets=null
    lpData:LpData |null=null
    public static hydrateData(data:any) {
        let output = new User();
        output.id = data.id
        output.firstName = data.firstName
        output.lastName = data.lastName
        output.phoneNumber = data.phoneNumber
        output.email = data.email
        output.userName = data.userName
        output.dateOfBirth= MomentDateHelper.createMomentDateFromAny(data.dateOfBirth)
        output.isOnline=data.isOnline
        output.lpData=LpData.hydrateData(data?.lpData??null)
        output.questions=data.questions?.length?data.questions.map((data:any)=>Question.hydrateData(data)):[]
        output.posts=data.posts?.length?data.posts.map((data:any)=>Post.hydrateData(data)):[]
        output.lpTickets=data.lpTickets?.length?data.lpTickets.map((data:any)=>Ticket.hydrateData(data)):[]
        return output;
    }
    public static deHydrateData(data:User|null):any{
        let output: any = {};
        if (!data) {
            return output;
        }
        output.firstName = data.firstName
        output.lastName = data.lastName
        output.phoneNumber = data.phoneNumber
        output.email = data.email
        output.userName = data.userName
        output.dateOfBirth= MomentDateHelper.createOutputApiFromAny(data.dateOfBirth)
        output.isOnline=data.isOnline
        output.lpData=LpData.deHydrateData(data.lpData)
        return output
    }

}