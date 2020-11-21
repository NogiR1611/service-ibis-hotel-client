import http from "./http-common";

class PesanService{
    create(data){
        return http.post('/kirim',data);
    }
}

export default new PesanService();