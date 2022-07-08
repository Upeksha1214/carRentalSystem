package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Customer {
    @Id
    private String id;
    private String email;
    private String nic;
    private String drivingLicence;
    private String address;
    private String contactNumber;

    @OneToMany(mappedBy = "customer")
    private List<RentalRequest> rentalRequests =new ArrayList<RentalRequest>();
}
