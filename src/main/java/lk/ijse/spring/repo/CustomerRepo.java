package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface CustomerRepo extends JpaRepository<Customer,String> {
    @Query("select c from Customer c where c.id=?1")
    public Customer getCustomerById(String id);
}
