import {Category} from "./Category";
import Ticket from "./Ticket";
import {User} from "./User";

export default class  Question {
    id :string=''
    title:string=''
    category:Category|null=null
    client: User|null=null
    tickets:Ticket[]|null=null
    public static hydrateData(data:any) {
        let output = new Question();
        output.id = data.id
        output.title = data.title
        output.category=data.category?.hydrateDate(data?.category??null)
        output.client=User.hydrateData(data?.client??null)
        output.tickets=data.tickets?.length?data.tickets.map((data:any)=>Ticket.hydrateData(data)):[]
        return output;
    }
    public static deHydrateData(data:Question|null):any{
        let output: any = {};
        if (!data) {
            return output;
        }
        output.title = data.title
        output.category=data.category?.id
        output.client=data.client?.id
        return output
    }
}