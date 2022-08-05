package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RegisterDriverDTO;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepo driverRepo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void AddDriver(RegisterDriverDTO registerDriverDTO) {

    }

    @Override
    public void saveDriver(RegisterDriverDTO dto) {
        if (!driverRepo.existsById(dto.getDriverId())){
            driverRepo.save(mapper.map(dto, Driver.class));
        }else{
            throw new RuntimeException("Driver Already Exist..!");
        }
    }

    @Override
    public void deleteDriver(String driverId) {
        if (driverRepo.existsById(driverId)){
            driverRepo.deleteById(driverId);
        }else{
            throw new RuntimeException("Please check the Driver ID.. No Such Driver..!");
        }
    }

    @Override
    public void updateDriver(RegisterDriverDTO dto) {
        if (driverRepo.existsById(dto.getDriverId())){
            driverRepo.save(mapper.map(dto, Driver.class));
        }else {
            throw new RuntimeException("No Such Driver To Update..! Please Check the ID..!");
        }
    }

    @Override
    public RegisterDriverDTO searchDriver(String driverId) {
        if (driverRepo.existsById(driverId)){
            return mapper.map(driverRepo.findById(driverId).get(), RegisterDriverDTO.class);
        }else {
            throw new RuntimeException("No Driver For " + driverId + " ..!");
        }
    }

    @Override
    public List<RegisterDriverDTO> getAllDrivers() {
        long count = driverRepo.count();
        if (count != 0) {
            List<Driver> all = driverRepo.findAll();
            List<RegisterDriverDTO> allDrivers = new ArrayList<>();
            for (Driver driver : all) {
                allDrivers.add(mapper.map(driver, RegisterDriverDTO.class));
            }

            return allDrivers;
        } else {
            throw new RuntimeException("Driver Empty");
        }
    }

    @Override
    public String generateDriverId() {
        return null;
    }
}