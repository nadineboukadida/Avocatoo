import {User} from "./User";
import {Category} from "./Category";


export  class Post{
    id:string=''
    title:string=''
    content:string=''
    isAccepted:boolean=false
    creator:User|null=null
    category:Category|null=null
    public static hydrateData(data:any) {
        let output = new Post();
        output.id = data.id
        output.title = data.title
        output.content = data.content
        output.isAccepted = data.isAccepted
        output.creator=User.hydrateData(data?.creator??null)
        output.category=Category.hydrateData(data?.category??null)
        return output;
    }
    public static deHydrateData(data:Post|null):any{
        let output: any = {};
        if (!data) {
            return output;
        }
        output.title = data.title
        output.content = data.content
        output.isAccepted = data.isAccepted
        output.creator=data.creator?.id
        return output
    }
}