import http from "./http-common";

class ListEventService {
    getAll(params) {
        return http.get("/json",{params});
    }
}

export default new ListEventService;