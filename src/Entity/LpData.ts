import {Category} from "./Category";
import Ticket from "./Ticket";
import {Post} from "./Post";
import {User} from "./User";

export class LpData{
    id:number=0
    image:string=''
    expertise:Category[]=[]
    user:User|null=null
    tickets:Ticket[]=[]
    posts:Post[]=[]
    public static hydrateData(data:any):LpData {
        let output = new LpData();
        output.id = data.id
        output.image=data.image
        output.user=User.hydrateData(data.user)
        output.expertise=data.expertise?.length? data.expertise.map((data:any)=>Category.hydrateData(data)):[]
        output.tickets=data.tickets?.length? data.tickets.map((data:any)=>Ticket.hydrateData(data)):[]
        output.posts=data.posts?.length? data.posts.map((data:any)=>Post.hydrateData(data)):[]
        return output;
    }
    public static deHydrateData(data:LpData|null):any{
        let output: any = {};
        if (!data) {
            return output;
        }
        output.expertise=data.expertise?.length? data.expertise.map((data:any)=>Category.deHydrateData(data)):[]
        return output
    }
}