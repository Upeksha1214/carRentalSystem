package lk.ijse.spring.service.impl;

import lk.ijse.spring.repo.AdminRepo;
import lk.ijse.spring.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {


     @Autowired
     private AdminRepo adminRepo;

    @Override
    public void checkUserAccount(String userName, String password) {
        if (adminRepo.existsById(userName)){
            String pass = adminRepo.getPassWordByUserName(userName);
            if (!pass.equals(password)){
                throw new RuntimeException("Password Incorrect");
            }
        }else {
            throw new RuntimeException("userName Incorrect");
        }
    }
}
