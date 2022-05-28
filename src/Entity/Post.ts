import {User} from "./User";


export  class Post{
    id:number=0
    title:string=''
    content:string=''
    isAccepted:boolean=false
    lawProfessional:User|null=null
    public static hydrateData(data:any) {
        let output = new Post();
        output.id = data.id
        output.title = data.title
        output.content = data.content
        output.isAccepted = data.isAccepted
        output.lawProfessional=User.hydrateData(data.lawProfessional)
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
        output.lawProfessional=data.lawProfessional?.id
        return output
    }
}