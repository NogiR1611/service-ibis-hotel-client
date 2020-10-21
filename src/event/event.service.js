import http from "./http";

class ListEventService {
    getAll() {
        return http.get("/json");
    }
}

export default new ListEventService();