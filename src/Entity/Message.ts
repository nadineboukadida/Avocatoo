import { IUser, User } from "./User";
import moment, { Moment } from "moment";
import { MomentDateHelper } from "../Modules/Standard/Date/MomentDateHelper";

export default class Message {
  id?: string = "";
  from: IUser |string| null = null;
  to: IUser |string| null = null;
  date: Moment | string | null = moment();
  ticket: string = ""
  content: string = "";
  public static hydrateData(data: any): Message {
    let output = new Message();
    output.id = data.id;
    output.from = User.hydrateData(data.from);
    output.to = User.hydrateData(data.to);
    output.date = MomentDateHelper.createMomentDateFromAny(data.date);
    output.content = data.content;
    output.ticket = data.ticket;
    return output;
  }
  public static deHydrateData(data: Message | null): any {
    let output: any = {};
    if (!data) {
      return output;
    }
    output.from = data.from;
    output.to = data.to;
    output.date = MomentDateHelper.createOutputApiFromAny(data.date);
    output.content = data.content;
    output.ticket = data.ticket;
    return output;
  }
}
