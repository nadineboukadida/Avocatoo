import {User} from "./User";
import Question from "./Question";

export class Category {
    id: string = ""
    name: string = ''
    experts: User[] | null = null
    questions: Question []|null=null
    public static hydrateData(data: any) {
        let output = new Category();
        output.id = data.id
        output.name = data.name
        output.questions=data.questions?.length?data.questions.map((data:any)=>Question.hydrateData(data)):[]
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