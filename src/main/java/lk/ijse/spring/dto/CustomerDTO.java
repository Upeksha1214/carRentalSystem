package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString

public class CustomerDTO {
    private String id;
    private String email;
    private String nic;
    private String drivingLicence;
    private String address;
    private String contactNumber;


}
