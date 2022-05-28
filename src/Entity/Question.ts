import {Category} from "./Category";
import Ticket from "./Ticket";
import {User} from "./User";

export default class  Question {
    id :number=0
    title:string=''
    category:Category|null=null
    client: User|null=null
    ticket:Ticket|null=null
    public static hydrateData(data:any) {
        let output = new Question();
        output.id = data.id
        output.title = data.title
        output.category=data.category?.hydrateDate(data.category)
        output.client=User.hydrateData(data.client)
        output.ticket=Ticket.hydrateData(data.ticket)
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