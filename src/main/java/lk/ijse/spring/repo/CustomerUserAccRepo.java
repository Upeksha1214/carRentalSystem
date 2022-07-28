package lk.ijse.spring.repo;

import lk.ijse.spring.entity.CustomerUserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface CustomerUserAccRepo extends JpaRepository<CustomerUserAccount,String> {
}
