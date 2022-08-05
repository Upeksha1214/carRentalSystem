package lk.ijse.spring.service;

import lk.ijse.spring.dto.RegisterDriverDTO;

import java.util.List;

public interface DriverService {
    void AddDriver(RegisterDriverDTO registerDriverDTO);
    void saveDriver(RegisterDriverDTO dto);
    void deleteDriver(String driverId);
    void updateDriver(RegisterDriverDTO dto);
    RegisterDriverDTO searchDriver(String driverId);
    List<RegisterDriverDTO> getAllDrivers();
    String generateDriverId();

}
