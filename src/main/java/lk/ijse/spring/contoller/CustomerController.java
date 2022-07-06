package lk.ijse.spring.contoller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("customer")
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public void registerCustomer(@RequestBody CustomerDTO customerDTO){

        Customer customer = new Customer(customerDTO.getId(), customerDTO.getEmail(), customerDTO.getNic(), customerDTO.getDrivingLicence(), customerDTO.getAddress(), customerDTO.getContactNumber());
        customerService.saveCustomer(customer);

    }
}
