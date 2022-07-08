package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Vehicle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentalRequestDTO {
    private String requestId;
    private String customerId;
    private String vehicleId;
    private String pickupDateAndTime;
    private String damagePaySlip;
    private double rentPayment;

}