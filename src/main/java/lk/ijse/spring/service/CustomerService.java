package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RegisterCustomerDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Car;

import java.util.List;

public interface CustomerService {
    void saveCustomer(RegisterCustomerDTO registerCustomerDTO);
    void updateCustomerInformation(CustomerDTO customerDTO);
    List<CarDTO> viewCars();
    void existUserCustomerAccount(String userName);
    void existEmail(String email);
    String getNewId();
    void checkUserAccount(String userName,String password);
    void existCustomerLicence(String custId);

}