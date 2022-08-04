import axios from "../axios";

class RentalRequestService{

    sendRentalRequest=async (requestData) =>{
        const promise = new Promise((resolve, reject) => {
            axios.post('rental/rentalRequest',requestData)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    uploadDamageSlip=async (custId,requestData) =>{
        const promise = new Promise((resolve, reject) => {
            axios.post('rental/uploadDamageSlip?custId='+custId,requestData)

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
export default new RentalRequestService()