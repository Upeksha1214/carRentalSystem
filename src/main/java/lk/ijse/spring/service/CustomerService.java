package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.CustomerUserAccDTO;
import lk.ijse.spring.dto.RegisterCustomerDTO;
import lk.ijse.spring.entity.Vehicle;

import java.util.List;

public interface CustomerService {
    void saveCustomer(RegisterCustomerDTO registerCustomerDTO);
    void updateCustomerInformation(CustomerDTO customerDTO);
    List<Vehicle> viewCars();

}