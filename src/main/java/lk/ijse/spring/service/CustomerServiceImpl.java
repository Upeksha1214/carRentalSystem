package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.CustomerUserAccDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.CustomerUserAccount;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.CustomerUserAccRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepo repo;

    @Autowired
    private CustomerUserAccRepo customerUserAccRepo;

    @Autowired
    private ModelMapper mapper;

    public void saveCustomer(CustomerDTO customerDTO, CustomerUserAccDTO customerUserAccDTO) {
        if(!repo.existsById(customerDTO.getId())) {

            repo.save(mapper.map(customerDTO,Customer.class));

            if (!customerUserAccRepo.existsById(customerUserAccDTO.getUsername())) {
                CustomerUserAccount customerUserAccount = new CustomerUserAccount(customerUserAccDTO.getUsername(), customerUserAccDTO.getPassword(), mapper.map(customerDTO, Customer.class));
                customerUserAccRepo.save(customerUserAccount);
            }else {
                throw new RuntimeException("UserAccount Already Exist");
            }


        }else {
            throw new RuntimeException("Customer Already Exist");
        }
    }
}
