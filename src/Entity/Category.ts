import {User} from "./User";
import Question from "./Question";
import {Post} from "./Post";
import {LpData} from "./LpData";

export class Category {
    id: string = ''
    name: string = ''
    experts: LpData[] | null = null
    questions: Question []|null=null
    posts:Post[]|null=null
    public static hydrateData(data: any) {
        let output = new Category();
        output.id = data.id
        output.name = data.name
        output.experts=data.experts?.length?data.experts.map((data:any)=>LpData.hydrateData(data)):[]
        output.questions=data.questions?.length?data.questions.map((data:any)=>Question.hydrateData(data)):[]
        output.posts=data.posts?.length?data.posts.map((data:any)=>Post.hydrateData(data)):[]
        return output;
    }

    public static deHydrateData(data: Category | null): any {
        let output: any = {};
        if (!data) {
            return output;
        }
        output.id = data.id
        output.name = data.name
        return output
    }
}