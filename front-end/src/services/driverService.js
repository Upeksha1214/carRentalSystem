import axios from "../axios";

class DriverService{

    getDriverIdImage=async (driverId,view) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('driver/getIdImage?driverId='+driverId+'&view='+view,{
                responseType: 'blob'
            })

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
}


    addDriver= async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('driver/saveDriver',data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    addDriverLicenseImage = async (data,driverId) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('driver/addDriverLicenseImage?driverId='+driverId,data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    updateDriver = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('driver/updateDriver',data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
    deleteDriver =async (driverId) =>{
        const promise = new Promise((resolve, reject) => {
            axios.delete('driver/delete drive?driverId='+driverId)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
    getAllDrivers = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('driver/getAllDrivers')

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

        updateDriverLicenseImage = async (image,driverId, view) => {
            const promise = new Promise((resolve, reject) => {
                axios.post('driver/updateDriverLicenseImage?driverId='+driverId+'&view='+view,image)
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }





    //------------------------------------------------------------------------------------------------




        deleteDriverLicenseImage =async (driverId) =>{
            const promise = new Promise((resolve, reject) => {
                axios.delete('driver/deleteLicenseImage?driverId='+driverId)

                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }


    //---------------------------------------------------------------------------------------------------------


        getDriverLicenseImage = async (driverId,view) =>{
            const promise = new Promise((resolve, reject) => {
                axios.get('driver/getLicenseImage?driverId='+driverId+'&view='+view, {
                    responseType: 'blob',
                })

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
export default new DriverService()