import { User } from "./User";

export class Post {
  id: string = "";
  title: string = "";
  content: string = "";
  isAccepted: boolean = false;
  creator: User | null = null;
  createdAt: string = new Date().toDateString()

  public static hydrateData(data: any) {
    let output = new Post();
    output.id = data.id;
    output.title = data.title;
    output.content = data.content;
    output.isAccepted = data.isAccepted;
    output.creator = User.hydrateData(data.creator);
    output.createdAt = data.createdAt;
    return output;
  }

  public static deHydrateData(data: Post | null): any {
    let output: any = {};
    if (!data) {
      return output;
    }
    output.title = data.title;
    output.content = data.content;
    output.isAccepted = data.isAccepted;
    output.creator = data.creator?.id;
    output.createdAt = data.createdAt;
    return output;
  }
}
