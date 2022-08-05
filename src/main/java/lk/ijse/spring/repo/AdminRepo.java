package lk.ijse.spring.repo;

import lk.ijse.spring.entity.AdminUserAccount;
import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AdminRepo extends JpaRepository<AdminUserAccount,String> {


    @Query("select c.password from AdminUserAccount c where c.userName=?1")
    public String getPassWordByUserName(String userName);
}
