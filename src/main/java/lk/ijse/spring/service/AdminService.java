package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.RentalRequestDTO;

import java.util.List;

public interface AdminService {
    public void addCar(CarDTO carDTO);
    public void editCar(CarDTO carDTO);
    public void deleteCar(CarDTO carDTO);
    public List<RentalRequestDTO> getAllRentalRequest();
}
