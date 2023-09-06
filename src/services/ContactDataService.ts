import http from "../http-common";
import ResponseData from "../types/ResponseData";
import axios from "axios";

class ContactDataService {
    static sendMessage(data): Promise<any> {
        return http.post<ResponseData>('/contacts', data)
    }
}

export default ContactDataService;