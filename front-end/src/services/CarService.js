import  axios from "../axios";
import {withStyles} from "@material-ui/core";

class CarService {
    addCarImage = async (data,carId) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('Car/addCarImage?carId='+carId,data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    addCar = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('Car/addCar',data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    getAllCar = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('Car/getAllCars')

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
    getCarImage = async (carId,view) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('Car/getCarImage?carId='+carId+'&view='+view, {
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

    updateCar = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('Car/editCar',data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    updateCarImage =async (data,carId,view) =>{
        const promise = new Promise((resolve, reject) => {
            axios.post('Car/updateCarImage?carId='+carId+'&view='+view,data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    deleteCar =async (carId) =>{
        const promise = new Promise((resolve, reject) => {
            axios.delete('Car/deleteCar?carId='+carId)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    deleteCarImages =async (carId) =>{
        const promise = new Promise((resolve, reject) => {
            axios.delete('Car/deleteCarImage?carId='+carId)

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
export default new CarService();