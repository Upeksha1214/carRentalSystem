import CarService from "../../../services/CarService";
import React, {useEffect, useState} from "react";
import CarItem from "../carItem/carItem";
import "../../../pages/Home/index";
import ClipLoader from "react-spinners/ClipLoader";

const carData=[];

function CarDetails(){
    const [loading,setLoading]=useState(false)
    const loadData= async () => {
        carData.length=0;
        let response = await CarService.getAllCar();
        if (response.status == 200) {
            carData.length=0
            for (const car of response.data.data) {
                let resPhoto = await CarService.getCarImage(car.vehicleId, "Front");
                carData.push({
                    carId:car.vehicleId,
                    imgUrl: URL.createObjectURL(resPhoto.data),
                    carType : car.vehicleType,
                    carName : car.brand,
                    numofp: car.numOfPassenger,
                    automatic: car.transmissionType,
                    state: car.state,
                    price: car.dailyPrice,
                })
            }
            setLoading(false)
        }
    }
    useEffect(() =>{
        loadData()
        setLoading(true)
    },[])
    return(
        <>
            {
                loading ?
                    <ClipLoader color={'blue'} loading={loading}  size={150} />
                    :
                    carData.slice(0,30).map((item) => (
                        <CarItem item={item}/>
                    ))
            }
        </>
    )
}
export default (CarDetails)