import { API_PATH } from "../../../api-path";
import { Category } from "../../Entity/Category";
import { Post } from "../../Entity/Post";
import { StandardFetcher } from "../Fetcher/StandardFetcher";

const BASE_PATH = API_PATH + "/posts/";

export class FeedService {
  static async getAll(): Promise<Post[]> {
    const response = await StandardFetcher.fetch(`${BASE_PATH}`);
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",response)
   
    if (!response) throw new Error();
    let posts: Post[] = response.data.pageData;
    // posts = posts.map((post) => Post.hydrateData(post));
    return posts;
  }

  static async getPostsByCategory(id: string): Promise<Post[]> {
    const response = await StandardFetcher.fetch(`${BASE_PATH}/category/${id}`);
    let posts: Post[] = response.data.pageData;
    posts = posts.map((post) => Post.hydrateData(post));
    return posts;
  }
}
