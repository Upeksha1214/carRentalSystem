import  axios from "../axios";

class CustomerService {

    addCustomer= async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('customer/CustomerRegister',data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    uploadImageID= async (dataFile,custId) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('customer/uploadIdImage?custId='+custId,dataFile)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    uploadImageLicence= async (dataFile,custId) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('customer/uploadLicenceImage?custId='+custId,dataFile)

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

export default new CustomerService();