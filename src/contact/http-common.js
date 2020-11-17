import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:8000/inbox",
    header : {
        "Content-type" : "application/json",
        "Access-Control-Allow-Origin" : "*",
    }
});