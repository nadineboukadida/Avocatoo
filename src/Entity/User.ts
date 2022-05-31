import { Moment } from "moment";
import { MomentDateHelper } from "../Modules/Standard/Date/MomentDateHelper";
import Question from "./Question";
import { LpData } from "./LpData";
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  userName: string;
  dateOfBirth: Moment | null;
  isOnline: boolean;
  questions: Question[] | [];
  lpData: LpData | null;
}
export class User implements IUser {
  id = "";
  firstName = "";
  lastName = "";
  address = "";
  phone = "";
  email = "";
  userName = "";
  dateOfBirth: Moment | null = null;
  isOnline = false;
  questions = [];
  lpData: LpData | null = null;

  public static hydrateData(data: any) {
    let output = new User();
    output.id = data.id;
    output.firstName = data.firstName;
    output.lastName = data.lastName;
    output.address = data.address;
    output.phone = data.phone;
    output.email = data.email;
    output.userName = data.userName;
    output.dateOfBirth = MomentDateHelper.createMomentDateFromAny(
      data.dateOfBirth
    );
    output.isOnline = data.isOnline;
    output.lpData = LpData.hydrateData(data.lpData);
    output.questions = data.questions?.length
      ? data.questions.map((data: any) => Question.hydrateData(data))
      : [];
    return output;
  }
  public static deHydrateData(data: User | null): any {
    let output: any = {};
    if (!data) {
      return output;
    }
    output.firstName = data.firstName;
    output.lastName = data.lastName;
    output.address = data.address;
    output.phone = data.phone;
    output.email = data.email;
    output.userName = data.userName;
    output.dateOfBirth = MomentDateHelper.createOutputApiFromAny(
      data.dateOfBirth
    );
    output.isOnline = data.isOnline;
    output.lpData = LpData.deHydrateData(data.lpData);
    return output;
  }
}
