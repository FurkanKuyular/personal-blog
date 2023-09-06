import http from "../http-common";
import ResponseData from "../types/ResponseData";

class SkillDataService {
    getAll(): Promise<any>{
        return http.get<ResponseData>('/skills');
    }
}

export default new SkillDataService();