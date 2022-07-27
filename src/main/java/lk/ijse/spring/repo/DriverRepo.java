package lk.ijse.spring.repo;

import javafx.scene.Scene;
import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sun.security.mscapi.CPublicKey;

public interface DriverRepo extends JpaRepository<Driver,String> {
    @Query("select d from Driver d where d.driverId=?1")
    Driver getDriverByDriverId(String driverId);
}
