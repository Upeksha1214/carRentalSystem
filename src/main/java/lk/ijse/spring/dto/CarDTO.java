package lk.ijse.spring.dto;

import lk.ijse.spring.embeded.PriceOfRentDuration;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CarDTO {
    private String vehicleId;
    private String brand;
    private String numOfPassenger;
    private String transmissionType;
    private String fuelType;
    private String priceOfRentDurationDaily;
    private String priceOfRentDurationMonthly;
    private String freeMileageForPriceAndDuration;
    private String priceOfExtraKm;
    private String registerNumber;
    private String color;
    private String state;
}
