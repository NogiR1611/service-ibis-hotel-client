import http from "./http-common";

class ListWisataService {
  getAll() {
    return http.get("/json");
  }

  // other CRUD methods
}

export default new ListWisataService();