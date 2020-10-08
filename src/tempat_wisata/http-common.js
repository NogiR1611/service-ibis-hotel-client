import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000/tempat-wisata",
  headers: {
    "Content-type": "application/json"
  }
});