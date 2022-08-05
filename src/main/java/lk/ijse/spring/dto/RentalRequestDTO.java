package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentalRequestDTO {
    private String customerId;
    private String vehicleId;
    private String pickupDateAndTime;
    private String returnDateAndTime;
    private String startPoint;
    private String endPoint;
    private String damageSlip;


}