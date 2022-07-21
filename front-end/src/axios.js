import axios from "axios";

//base url
const instance=axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com/'

})
export default instance;