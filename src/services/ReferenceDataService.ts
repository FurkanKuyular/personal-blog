import http from "../http-common";
import ResponseData from "../types/ResponseData";

class ReferenceDataService {
    getAll(): Promise<any>{
        return http.get<ResponseData>('/references');
    }
}

export default new ReferenceDataService();