import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-eea0b-default-rtdb.firebaseio.com/"
});

export default instance;
