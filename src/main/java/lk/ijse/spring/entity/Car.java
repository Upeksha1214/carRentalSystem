package lk.ijse.spring.entity;

import lk.ijse.spring.embeded.PriceOfRentDuration;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Car {
    @Id
    private String vehicleId;
    private String vehicleType;
    private String brand;
    private String NumOfPassenger;
    private String transmissionType;
    private String fuelType;
    private String dailyPrice;
    private String monthlyPrice;
    private String dailyFreeKm;
    private String monthlyFreeKm;
    private String priceOfExtraKm;
    private String registerNumber;
    private String color;
    private String state;

    @OneToMany(mappedBy = "car")
    private Set<DriverSchedule> driverSchedules=new HashSet<DriverSchedule>();

}