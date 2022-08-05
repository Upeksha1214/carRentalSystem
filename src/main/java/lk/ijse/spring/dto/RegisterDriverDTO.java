package lk.ijse.spring.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RegisterDriverDTO {
    private String driverId;
    private String email;
    private String drivingLicence;
    private String address;
    private String contactNumber;
    private String userName;
    private String password;
    private String state;
}


