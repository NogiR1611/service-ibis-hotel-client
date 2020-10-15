import http from "./http-common";

class PesanService{
    sendAll(data){
        return http.post('/kirim',{data})
    }
}

export default new PesanService();