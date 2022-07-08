package lk.ijse.spring.repo;

import lk.ijse.spring.entity.RentalRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalRequestRepo extends JpaRepository<RentalRequest,String> {
}
