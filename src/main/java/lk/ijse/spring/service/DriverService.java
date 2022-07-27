package lk.ijse.spring.service;


import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.RentalRequestDTO;

import java.util.List;

public interface DriverService {
    public void addDriver(DriverDTO driverDTO);
    public void editDriver(DriverDTO driverDTO);
    public void deleteDriver(String driverId);
    public List<RentalRequestDTO> getAllRentalRequest();
    public List<DriverDTO> getAllCars();
}
