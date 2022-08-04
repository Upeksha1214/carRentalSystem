package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.*;
import lk.ijse.spring.repo.*;
import lk.ijse.spring.service.RentalRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Random;

@Service
@Transactional
public class RentalRequestServiceImpl implements RentalRequestService {

    @Autowired
    private CustomerRepo repo;

    @Autowired
    private CarRepo carRepo;

    @Autowired
    DriverRepo driverRepo;

    @Autowired
    private RentalRequestRepo rentalRequestRepo;

    @Autowired
    private DriverScheduleRepo driverScheduleRepo;

    @Override
    public void rentalRequest(RentalRequestDTO rentalRequestDTO) {

            Customer customer = repo.getCustomerById(rentalRequestDTO.getCustomerId());
            Car car = carRepo.getVehicleById(rentalRequestDTO.getVehicleId());

            RentalRequest rentalRequest = new RentalRequest();

            rentalRequest.setCustomer(customer);
            rentalRequest.setCar(car);
            rentalRequest.setPickupDateAndTime(rentalRequestDTO.getPickupDateAndTime());
            rentalRequest.setReturnDateAndTime(rentalRequestDTO.getReturnDateAndTime());
            rentalRequest.setRentPayment("00");
            rentalRequest.setDamagePaySlip(rentalRequestDTO.getDamageSlip());
            rentalRequest.setState("pending");
            rentalRequestRepo.save(rentalRequest);

              List<Driver> activeDriverList = driverRepo.getDriverByActive();

              Driver driver = activeDriverList.get(new Random().nextInt(activeDriverList.size()));
              if (driver!=null){
                      driver.setState("off");
                      driverRepo.save(driver);

                  DriverSchedule driverSchedule = new DriverSchedule();
                  driverSchedule.setDriver(driver);
                  driverSchedule.setCar(car);

                  String[] split = rentalRequestDTO.getPickupDateAndTime().split("T");
                  driverSchedule.setDate(split[0]);
                  driverSchedule.setTime(split[1]);
                  driverScheduleRepo.save(driverSchedule);
              }else {

              }



    }
}
