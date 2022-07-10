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
    private String image;
    private int NumOfPassenger;
    private String transmissionType;
    private String fuelType;
    private PriceOfRentDuration priceOfRentDuration;
    private String freeMileageForPriceAndDuration;
    private String priceOfExtraKm;
    private String registerNumber;
    private String state;
}
