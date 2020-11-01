import http from "./http";

class ListEventService {
    getAll(params) {
        return http.get("/json",{params});
    }

    getId(id) {
        return http.get(`/json/${id}`);
    }
}

export default new ListEventService();