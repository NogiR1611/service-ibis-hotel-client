import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:4000/pesan",
    header : {
        "Content-type" : "application/json",
        "Access-Control-Allow-Origin" : "*"
    }
});