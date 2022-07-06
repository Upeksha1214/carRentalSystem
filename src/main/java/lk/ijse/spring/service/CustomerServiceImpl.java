package lk.ijse.spring.service;

import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo repo;
    
    public void saveCustomer(Customer customer) {
        if(!repo.existsById(customer.getId())) {
            repo.save(customer);
        }else {
            throw new RuntimeException("Customer Already Exist");
        }
    }
}
