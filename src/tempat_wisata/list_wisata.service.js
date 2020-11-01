import http from "./http-common";

class ListWisataService {
  getAll(params) {
    return http.get("/json",{params});
  }

  // other CRUD methods
}

export default new ListWisataService();