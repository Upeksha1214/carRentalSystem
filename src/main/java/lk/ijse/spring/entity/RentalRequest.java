package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentalRequest {
    @Id
    private String requestId;
    @ManyToOne
    private Customer customer;

    @OneToOne
    private Vehicle vehicle;

    private String pickupDateAndTime;

    @CreationTimestamp
    private Date requestDateAndTime;

    private String damagePaySlip;

    private double rentPayment;

    private String state;

}
