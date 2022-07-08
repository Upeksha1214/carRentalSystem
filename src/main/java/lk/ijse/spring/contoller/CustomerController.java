package lk.ijse.spring.contoller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.CustomerUserAccDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("customer")
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil registerCustomer(@RequestBody CustomerDTO customerDTO, @RequestBody CustomerUserAccDTO customerUserAccDTO){

        customerService.saveCustomer(customerDTO,customerUserAccDTO);
        return new ResponseUtil(200,"Customer addedd complete",null);
    }

    @PutMapping
    public ResponseUtil customerInformationUpdate(@RequestBody CustomerDTO customerDTO){

    }
}
