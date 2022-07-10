package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CarRepo extends JpaRepository <Car,String> {
    @Query("select v from Car v where v.vehicleID=?1")
    public Car getVehicleById(String id);


}
