import http from "./http";

class ListEventService {
    getAll(params) {
        return http.get("/json",{params});
    }
}

export default new ListEventService();