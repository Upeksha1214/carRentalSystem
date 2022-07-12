package lk.ijse.spring.contoller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RegisterCustomerDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("customer")
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @PostMapping(path = "Customer Register",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil registerCustomer(@RequestBody RegisterCustomerDTO registerCustomerDTO){

        customerService.saveCustomer(registerCustomerDTO);
        return new ResponseUtil(200,"Customer added complete",null);
    }

    @SneakyThrows
    @PostMapping(path = "uploadIdImage")
    public ResponseUtil uploadImageID(@RequestParam("NIC") MultipartFile multipartFiles, @RequestParam String custId){

        String pathDirectory="D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\image\\idCardImage";
        String imageName=custId+"ID_CARD"+".jpeg";
        Files.copy(multipartFiles.getInputStream(), Paths.get(pathDirectory+ File.separator+imageName), StandardCopyOption.REPLACE_EXISTING);

        return new ResponseUtil(200,"ID_CARD image added success..",null);
    }

    @SneakyThrows
    @PostMapping(path = "uploadLicenceImage")
    public ResponseUtil uploadImageLicence(@RequestParam("Licence")MultipartFile multipartFiles, @RequestParam String custId){

        String pathDirectory="D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\image\\licenceImage";
        String imageName=custId+"Licence_CARD"+".jpeg";
        Files.copy(multipartFiles.getInputStream(), Paths.get(pathDirectory+ File.separator+imageName), StandardCopyOption.REPLACE_EXISTING);

        return new ResponseUtil(200,"Licence_Card image added success..",null);
    }

    @PutMapping
    public ResponseUtil updateCustomerInformation(@RequestBody CustomerDTO customerDTO){
        customerService.updateCustomerInformation(customerDTO);
        return new ResponseUtil(200,"Updated Customer Information",null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil ViewAllCar(){
        List<Car> cars =customerService.viewCars();
        return new ResponseUtil(200,"All car Details received", cars);
    }

    @PostMapping(path = "rentalRequest")
    public ResponseUtil rentalRequest(@RequestBody RentalRequestDTO rentalRequestDTO){
        customerService.rentalRequest(rentalRequestDTO);
        return new ResponseUtil(200,"All car Details received",null);
    }

}
