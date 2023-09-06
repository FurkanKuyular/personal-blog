import http from "../http-common";
import ResponseData from "../types/ResponseData";

class ExpertiseDataService {
    getAll(): Promise<any>{
        return http.get<ResponseData>('/expertises');
    }
}

export default new ExpertiseDataService();