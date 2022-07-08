package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.CustomerUserAccDTO;
import lk.ijse.spring.entity.Customer;

public interface CustomerService {
    void saveCustomer(CustomerDTO customerDTO , CustomerUserAccDTO customerUserAccDTO);
    void update(CustomerDTO customerDTO);
}
