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

    public void addDriverSchedule(Car car,Driver driver,RentalRequestDTO rentalRequestDTO){
        DriverSchedule driverSchedule = new DriverSchedule();
        driverSchedule.setDriver(driver);
        driverSchedule.setCar(car);

        String[] split = rentalRequestDTO.getPickupDateAndTime().split("T");
        driverSchedule.setGoDate(split[0]);
        driverSchedule.setGoTime(split[1]);

        String[] comeDateAndTime = rentalRequestDTO.getReturnDateAndTime().split("T");
        driverSchedule.setComeDate(comeDateAndTime[0]);
        driverSchedule.setComeTime(comeDateAndTime[1]);


        driverScheduleRepo.save(driverSchedule);

    }

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

              /*List<Driver> activeDriverList = driverRepo.getDriverByActive();

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

              }*/


        List<Driver> allDrivers = driverRepo.findAll();

        Driver driver = allDrivers.get(new Random().nextInt(allDrivers.size()));

        /* System.out.println(driver.toString());*/
        List<DriverSchedule> all = driverScheduleRepo.findAll();

        if (all.isEmpty()){

            addDriverSchedule(car,driver,rentalRequestDTO);


        }else {

            List<DriverSchedule> driverRecord = driverScheduleRepo.ifExitsDriverById(driver.getDriverId());

            if (driverRecord.isEmpty()) {
                addDriverSchedule(car, driver, rentalRequestDTO);
                System.out.println("no this Driver Record");

            }else {

                DriverSchedule driverComeTime = driverScheduleRepo.getDriverComeTime(driver.getDriverId());
                /* System.out.println(driverComeTime.getComeDate());*/

                String[] split = driverComeTime.getComeDate().split("-");

                System.out.println(split[2]);


                String[] split1 = rentalRequestDTO.getPickupDateAndTime().split("-");

                String[] split2 = split1[2].split("T");


                System.out.println(split2[0]);

                int driverFreeDate = Integer.parseInt(split[2]) + 1;
                int requestDate = Integer.parseInt(split2[0]);

                System.out.println(requestDate + "  <  " + driverFreeDate);
                if (requestDate > driverFreeDate) {
                    addDriverSchedule(car, driver, rentalRequestDTO);

                } else {
                    throw new RuntimeException("Try Again later");
                }
            }



        }




    }
}
