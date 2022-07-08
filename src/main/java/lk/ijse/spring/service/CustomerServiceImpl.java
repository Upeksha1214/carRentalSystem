package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.CustomerUserAccDTO;
import lk.ijse.spring.dto.RegisterCustomerDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.CustomerUserAccount;
import lk.ijse.spring.entity.RentalRequest;
import lk.ijse.spring.entity.Vehicle;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.CustomerUserAccRepo;
import lk.ijse.spring.repo.RentalRequestRepo;
import lk.ijse.spring.repo.VehicleRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepo repo;

    @Autowired
    private CustomerUserAccRepo customerUserAccRepo;

    @Autowired
    private VehicleRepo vehicleRepo;

    @Autowired
    private RentalRequestRepo rentalRequestRepo;

    @Autowired
    private ModelMapper mapper;

    public void saveCustomer(RegisterCustomerDTO registerCustomerDTO) {
        if (!repo.existsById(registerCustomerDTO.getId())) {

            repo.save(mapper.map(registerCustomerDTO, Customer.class));

            if (!customerUserAccRepo.existsById(registerCustomerDTO.getUsername())) {
                customerUserAccRepo.save(mapper.map(registerCustomerDTO, CustomerUserAccount.class));
            } else {
                throw new RuntimeException("UserAccount Already Exist");
            }


        } else {
            throw new RuntimeException("Customer Already Exist");
        }
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
    public List<Vehicle> viewCars() {
        return vehicleRepo.findAll();
    }

    @Override
    public void rentalRequest(RentalRequestDTO rentalRequestDTO) {

        if (!rentalRequestRepo.existsById(rentalRequestDTO.getRequestId())){

            Customer customer = repo.getCustomerById(rentalRequestDTO.getCustomerId());
            Vehicle vehicle = vehicleRepo.getVehicleById(rentalRequestDTO.getVehicleId());

            RentalRequest rentalRequest = new RentalRequest();
            rentalRequest.setRequestId(rentalRequestDTO.getRequestId());
            rentalRequest.setCustomer(customer);
            rentalRequest.setVehicle(vehicle);
            rentalRequest.setPickupDateAndTime(rentalRequestDTO.getPickupDateAndTime());
            rentalRequest.setDamagePaySlip(rentalRequestDTO.getDamagePaySlip());
            rentalRequest.setRentPayment(rentalRequestDTO.getRentPayment());
            rentalRequest.setState("pending");
            rentalRequestRepo.save(rentalRequest);
        }else {
            throw new RuntimeException("Rental request Fail");
        }
    }
}
