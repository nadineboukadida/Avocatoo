import { Category } from "./Category";
import Ticket from "./Ticket";

export default class Question {
  id: string = "";
  title: string = "";
  category: Category | null = null;
  ticket: Ticket | null = null;
  public static hydrateData(data: any) {
    let output = new Question();
    output.id = data.id;
    output.title = data.title;
    output.category = data.category?.hydrateDate(data.category);
    output.ticket = Ticket.hydrateData(data.ticket);
    return output;
  }
  public static deHydrateData(data: Question | null): any {
    let output: any = {};
    if (!data) {
      return output;
    }
    output.title = data.title;
    output.category = data.category?.id;
    return output;
  }
}
