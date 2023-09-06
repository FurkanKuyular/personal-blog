import http from "../http-common";
import ResponseData from "../types/ResponseData";

class PostDataService {
    getAll(): Promise<any>{
        return http.get<ResponseData>('/posts');
    }
}

export default new PostDataService();