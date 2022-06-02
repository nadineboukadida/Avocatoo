import { API_PATH } from "../../../api-path";
import { User } from "../../Entity/User";
import { StandardFetcher } from "../Fetcher/StandardFetcher";

const BASE_PATH = API_PATH + "/users";

export class UserService {
  static async getAll(): Promise<User[]> {
    const response = await StandardFetcher.fetch(`${BASE_PATH}`);
    console.log(response);
    let users: User[] = response.data.pageData;
    // users = users.map((user) => User.hydrateData(user));
    return users;
  }

  static async getById(id: string): Promise<User> {
    const response = await StandardFetcher.fetch(`${BASE_PATH}/${id}`);
    return response.data;
  }

  static async getLps(): Promise<User[]> {
    const response = await StandardFetcher.fetch(`${BASE_PATH}/lp`);
    let users: User[] = response.data.pageData;
    // users = users.map((user) => User.hydrateData(user));
    return users;
  }
}
