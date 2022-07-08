package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VehicleRepo extends JpaRepository <Vehicle,String> {
    @Query("select v from Vehicle v where v.vehicleID=?1")
    public Vehicle getVehicleById(String id);
}
