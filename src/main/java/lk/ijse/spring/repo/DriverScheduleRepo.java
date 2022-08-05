package lk.ijse.spring.repo;

import lk.ijse.spring.entity.DriverSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface DriverScheduleRepo extends JpaRepository<DriverSchedule,String> {

    @Query(value = "select * from DriverSchedule where driver_driverId=? order by comeDate desc LIMIT 1", nativeQuery = true)
    public DriverSchedule getDriverComeTime(String driverId);

    @Query(value = "select * from DriverSchedule where driver_driverId=?", nativeQuery = true)
    public List<DriverSchedule> ifExitsDriverById(String driverId);

}
