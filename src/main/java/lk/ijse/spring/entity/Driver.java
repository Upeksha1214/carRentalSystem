package lk.ijse.spring.entity;

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
public class Driver {
    @Id
    private String driverId;
    private String email;
    private String drivingLicence;
    private String address;
    private String contactNumber;
    private String state;

    @OneToMany(mappedBy = "driver")
    private Set<DriverSchedule> driverSchedule=new HashSet<DriverSchedule>();

}
