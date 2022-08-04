package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RegisterCustomerDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.CustomerUserAccount;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.RentalRequest;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.CustomerUserAccRepo;
import lk.ijse.spring.repo.RentalRequestRepo;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepo repo;

    @Autowired
    private CustomerUserAccRepo customerUserAccRepo;

    @Autowired
    private CarRepo carRepo;

    @Autowired
    private RentalRequestRepo rentalRequestRepo;

    @Autowired
    private ModelMapper mapper;



    @Transactional
    @Override
    public void saveCustomer(RegisterCustomerDTO registerCustomerDTO) {
        if(!repo.existsById(registerCustomerDTO.getId())) {

            repo.save(mapper.map(registerCustomerDTO,Customer.class));

            if (!customerUserAccRepo.existsById(registerCustomerDTO.getUsername())) {
                customerUserAccRepo.save(mapper.map(registerCustomerDTO,CustomerUserAccount.class));

            }else {
                throw new RuntimeException("UserAccount Already Exist");
            }
        }else {

            throw new RuntimeException("Customer Already Exist");
        }
    }

    @Override
    public void existUserCustomerAccount(String userName){

        boolean b = customerUserAccRepo.existsById(userName);
        if (b==true){
            throw new RuntimeException("UserAccount Already Exist");
        }
    }

    @Override
    public void existEmail(String email) {
        String s = repo.existsByEmail(email);
        if (s!=null){
            throw new RuntimeException("Email Already Exist");
        }
    }

    @Override
    public String getNewId() {
        String lastCustId = repo.getLastCustId();

        if (lastCustId!=null){

            String[] split = lastCustId.split("-");
            long index = Long.parseLong(split[1]);

            long incrementId=++index;

            if (incrementId<10){
                return "C-00"+incrementId ;
            }else if (incrementId>=10 && index<100){
                return "C-0"+ incrementId ;
            }else if(incrementId>=100){
                return "C-"+ incrementId ;
            }
            return "C-001";
        }
        return "C-001";
    }

    @Override
    public void checkUserAccount(String userName,String password) {
        if (customerUserAccRepo.existsById(userName)){
            String pass = customerUserAccRepo.getPassWordByUserName(userName);
            if (!pass.equals(password)){
                throw new RuntimeException("Password Incorrect");
            }
        }else {
            throw new RuntimeException("userName Incorrect");
        }

    }

    @Override
    public void existCustomerLicence(String custId) {

    }


    @Override
    public void updateCustomerInformation(CustomerDTO customerDTO) {
        if (repo.existsById(customerDTO.getId())) {
            repo.save(mapper.map(customerDTO, Customer.class));
        } else {
            throw new RuntimeException("Customer Update Fail");
        }
    }

    @Override
    public List<CarDTO> viewCars() {
        List<Car> all = carRepo.findAll();
        List<CarDTO> vehicleDTOS = new ArrayList();

        for (Car v: all) {
            vehicleDTOS.add(mapper.map(v,CarDTO.class));
        }
        return vehicleDTOS;
    }

}
