package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class DriverSchedule{
    @Id
    private int id;
    @ManyToOne(cascade = CascadeType.ALL)
    private Driver driver;
    @ManyToOne(cascade = CascadeType.ALL)
    private Vehicle vehicle;

    private String date;
    private String time;


}
