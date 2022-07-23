import axios from "axios";

//base url
const instance=axios.create({
    baseURL : 'http://localhost:8080/CarRentalSystem_war/'

})
export default instance;