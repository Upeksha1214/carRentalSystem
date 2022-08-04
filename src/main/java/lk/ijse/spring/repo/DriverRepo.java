package lk.ijse.spring.repo;

import javafx.scene.Scene;
import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sun.security.mscapi.CPublicKey;

import java.util.List;

public interface DriverRepo extends JpaRepository<Driver,String> {
    @Query("select d from Driver d where d.driverId=?1")
    Driver getDriverByDriverId(String driverId);

    @Query(value = "select * from Driver where state='active'", nativeQuery = true)
    public List<Driver> getDriverByActive();
}
