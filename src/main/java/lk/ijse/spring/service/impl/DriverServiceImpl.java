package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.RentalRequest;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.repo.RentalRequestRepo;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class DriverServiceImpl implements DriverService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private DriverRepo driverRepo;

    @Autowired
    private RentalRequestRepo rentalRequestRepo;
    @Override
    public void addDriver(DriverDTO driverDTO) {

        if (!driverRepo.existsById(driverDTO.getDriverId())){
            driverRepo.save(mapper.map(driverDTO, Driver.class));
        }else {
            throw new RuntimeException("Driver Already Exist");
        }
    }

    @Override
    public void editDriver(DriverDTO driverDTO) {
        if (!driverRepo.existsById(driverDTO.getDriverId())){
            driverRepo.save(mapper.map(driverDTO, Driver.class));
        }else {
            throw new RuntimeException("Driver not Found ..");
        }
    }

    @Override
    public void deleteDriver(String driverId) {
        if (!driverRepo.existsById(driverId)){
            driverRepo.deleteById(driverId);
        }else {
            throw new RuntimeException("Driver not Found ..");
        }

    }

    @Override
    public List<RentalRequestDTO> getAllRentalRequest() {
        List<RentalRequest> all = rentalRequestRepo.findAll();
        return (List<RentalRequestDTO>) mapper.map(all,RentalRequestDTO.class);
    }

    @Override
    public List<DriverDTO> getAllCars() {
        long count=driverRepo.count();
        if(count!=0){
            List<Driver> all = driverRepo.findAll();
            List<DriverDTO> allDriver=new ArrayList<>();
            for (Driver driver : all) {
                allDriver.add(mapper.map(driver,DriverDTO.class));
            }
            return allDriver;
        }else{
            throw new RuntimeException("Car Empty .....");
        }
    }
}
