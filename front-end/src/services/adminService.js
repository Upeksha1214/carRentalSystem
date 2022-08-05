import axios from "../axios";

class AdminService {

    checkAdminUserAccount=async (userName,password) =>{
        const promise = new Promise((resolve, reject) => {
            var qs = require('qs');
            var data = qs.stringify({
                'userName': userName,
                'password': password,
            });
            var config = {
                method: 'post',
                url: 'admin/checkAccount',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : data
            };
            axios(config)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }







}
export default new AdminService();