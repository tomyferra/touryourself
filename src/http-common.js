import axios from "axios";

export default axios.create({
  baseURL: "https://places-api.vercel.app/api/places",
  headers: {
    "Content-type": "application/json"
  }
});