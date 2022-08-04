package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentalRequest {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int requestId;
    @ManyToOne
    private Customer customer;

    @OneToOne
    private Car car;

    private String pickupDateAndTime;
    private String returnDateAndTime;

    @CreationTimestamp
    private Date requestDateAndTime;


    private String damagePaySlip;

    private String rentPayment;

    private String state;


}
