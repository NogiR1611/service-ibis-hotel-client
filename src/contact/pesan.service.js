import http from "./http-common";

class PesanService{
    create(data){
        return http.post('/kirim',{
            data : data,
            _token : '{{ csrf_token() }}'
        });
    }
}

export default new PesanService();