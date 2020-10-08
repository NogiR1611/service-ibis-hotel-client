import http from "./http-common";

class ListWisataService {
  getAll(params) {
    return http.get("/publish", { params });
  }

  // other CRUD methods
}

export default new ListWisataService();