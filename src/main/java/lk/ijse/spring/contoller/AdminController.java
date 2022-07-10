package lk.ijse.spring.contoller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.RentalRequestDTO;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.util.ResponseUtil;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController
@RequestMapping("Admin")
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil addCar(@RequestBody CarDTO carDTO){

        adminService.addCar(carDTO);
        return new ResponseUtil(200,"All car Details added", null);
    }

    @SneakyThrows
    @PostMapping(path = "addCarImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil addCarImage(@RequestParam("file")MultipartFile multipartFile){
        String pathDirectory="D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\image\\";
        Files.copy(multipartFile.getInputStream(), Paths.get(pathDirectory+ File.separator+multipartFile.getOriginalFilename()),
                StandardCopyOption.REPLACE_EXISTING);
        return new ResponseUtil(200,"Car image complete",null);
    }

    @GetMapping(path = "getCarImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil  getCarImage(@RequestParam String name){
        String pathDirectory="D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\image\\";
        Path path = Paths.get(pathDirectory + File.separator + name);
        return new ResponseUtil(200,"Car image return complete",path);

    }

    @PutMapping(path = "editCar", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil editCar(CarDTO carDTO){
        adminService.editCar(carDTO);
        return new ResponseUtil(200,"car Details Updated",null);
    }

    @DeleteMapping(path = "deleteCar",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCar(CarDTO carDTO){
        adminService.deleteCar(carDTO);
        return new ResponseUtil(200,"car Delete success",null);
    }


    @GetMapping(path = "viewRentalRequest", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil viewRentalRequest(){
        List<RentalRequestDTO> allRentalRequest = adminService.getAllRentalRequest();
        return new ResponseUtil(200,"car Delete success",allRentalRequest);
    }

}
