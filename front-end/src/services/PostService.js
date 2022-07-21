import axios from "axios";

class PostService {
    uploadImage = async (data) => {
        console.log("form data: " + data)


        const promise = new Promise((resolve, reject) => {
            axios.post('posts', data)   //10s
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }
}

export default new PostService();