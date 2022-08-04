package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDTO;

import java.util.List;

public interface DriverService {
    void AddDriver(DriverDTO driverDTO);
    void saveDriver(DriverDTO dto);
    void deleteDriver(String driverId);
    void updateDriver(DriverDTO dto);
    DriverDTO searchDriver(String driverId);
    List<DriverDTO> getAllDrivers();
    String generateDriverId();

}
