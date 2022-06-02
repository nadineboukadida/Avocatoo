import { API_PATH } from "../../../api-path";
import { Category } from "../../Entity/Category";
import { StandardFetcher } from "../Fetcher/StandardFetcher";

const BASE_PATH = API_PATH + "/categories/";

export class CategoryService {
  static async getAll(): Promise<Category[]> {
    const response = await StandardFetcher.fetch(`${BASE_PATH}`);
    let categories: Category[] = response.data
    categories = categories.map((category) => Category.hydrateData(category));
    return categories;
  }
  }

