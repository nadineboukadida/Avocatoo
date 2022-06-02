import { User } from "./User";
import Message from "./Message";

export default class Ticket {
  id: string = "";
  ieRead: boolean = false;
  isTyping: boolean = false;
  lp: User | null = null;
  public static hydrateData(data: any) {
    let output = new Ticket();
    output.id = data.id;
    output.ieRead = data.ieRead;
    output.isTyping = data.isTyping;
    output.lp = data.lp;
    return output;
  }
  public static deHydrateData(data: Ticket | null): any {
    let output: any = {};
    if (!data) {
      return output;
    }
    output.ieRead = data.ieRead;
    output.isTyping = data.isTyping;
    return output;
  }
}
