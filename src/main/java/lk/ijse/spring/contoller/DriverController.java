package lk.ijse.spring.contoller;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.ImageDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.FileDownloadUtil;
import lk.ijse.spring.util.ResponseUtil;
import lk.ijse.spring.util.SearchFile;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController
@RequestMapping("driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService driverService;

    @Autowired
    FileDownloadUtil fileDownloadUtil;

    @Autowired
    SearchFile searchFileUtil;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path = "saveDriver", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveDriver(@RequestBody DriverDTO dto) {
        driverService.saveDriver(dto);
        return new ResponseUtil(200, "Successfully Driver Saved.", null);
    }

    @PutMapping(path = "updateDriver" , produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateDriver(@RequestBody DriverDTO dto) {
        driverService.updateDriver(dto);
        return new ResponseUtil(200, "Successfully Driver Updated.", null);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchDriver(@PathVariable String id) {
        return new ResponseUtil(200, "Ok.", driverService.searchDriver(id));
    }

    @DeleteMapping(path = "delete driver", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteDriver(@RequestParam String driverId) {
        driverService.deleteDriver(driverId);
        return new ResponseUtil(200, "Successfully Driver Deleted.", null);
    }

    @GetMapping(path ="getAllDrivers", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllDrivers() {
        List<DriverDTO> allDrivers = driverService.getAllDrivers();
        return new ResponseUtil(200,"Get All Drivers",allDrivers);    }


    @GetMapping(params = {"ids"})
    public ResponseUtil generateDriverIds(@RequestParam String ids) {
        return new ResponseUtil(200, "Ok", driverService.generateDriverId());
    }




//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------



   /* @SneakyThrows
    @PostMapping(path = "addDriverIdImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadDriverIDImage(@RequestParam(value = "param") MultipartFile[] multipartFile , @RequestParam("driverId") String driverId) {

        String pathDirectory = "E:\\Dilan-Spring-Car-Rental\\Easy-Car-Rental-React\\Back-End\\src\\main\\resources\\static\\IdCardImage\\";
        String [] driverIdImageView={"Front","Back", "Side","Interior"};
        for (int i = 0; i < multipartFile.length; i++) {
            String[] split=multipartFile[i].getContentType().split("/");

            if (split[1].equals("jpeg") || split[1].equals("png")){
                String idImageName = driverId +driverIdImageView[i] + ".jpeg";
                Files.copy(multipartFile[i].getInputStream(), Paths.get(pathDirectory+ File.separator+idImageName), StandardCopyOption.REPLACE_EXISTING);
            }else {
                return new ResponseUtil(404,"please..  must be driver images type  jpeg or png",null);
            }
        }
        return new ResponseUtil(200, "Driver ID_CARD image added success..", null);
    }*/



    @SneakyThrows
    @PostMapping(path = "addDriverLicenseImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadDriverLicenseImage(@RequestParam("param") MultipartFile[] multipartFile , @RequestParam("driverId") String driverId) {

        String pathDirectory = "D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\Image\\licenceImage";
        String [] driverLicenseImageView={"Front","Back"};
        for (int i = 0; i < multipartFile.length; i++) {
            String[] split=multipartFile[i].getContentType().split("/");

            if (split[1].equals("jpeg") || split[1].equals("png")){
                String licenseImageName = driverId +driverLicenseImageView[i] + ".jpeg";
                Files.copy(multipartFile[i].getInputStream(), Paths.get(pathDirectory+ File.separator+licenseImageName), StandardCopyOption.REPLACE_EXISTING);
            }else {
                return new ResponseUtil(404,"please..  must be driver images type  jpeg or png",null);
            }
        }
        return new ResponseUtil(200, "Driver License Card image added success..", null);
    }




//-------------------------------------------------------------------------------------------------------------------------------------------------------------



    @GetMapping(path = "getIdImage" , produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<?> getIdImage(@RequestParam String driverId,@RequestParam String view){
        ImageDTO imageDTO = new ImageDTO(driverId, "driverLicence", view);
        Resource fileAsResource = fileDownloadUtil.getFileAsResource(imageDTO);

        if (fileAsResource==null){
            return ResponseEntity.badRequest().contentType(MediaType.APPLICATION_JSON).body("Driver Image not found");
        }
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(fileAsResource);
    }



/*
    @GetMapping(path = "getLicenseImage" , produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<?> getLicenseImage(@RequestParam String driverId, String view){
        ImageDTO imageDTO = new ImageDTO(driverId, "driver", view);
        Resource fileAsResource = fileDownloadUtil.getFileAsResource(imageDTO);

        if (fileAsResource==null){
            return ResponseEntity.badRequest().contentType(MediaType.APPLICATION_JSON).body("Driver Image not found");
        }
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(fileAsResource);
    }
*/





//-----------------------------------------------------------------------------------------------------------------------------------------------------------------




    /*@SneakyThrows
    @PostMapping(path = "updateDriverIdImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateDriverIdImage(@RequestParam(value = "idImage") MultipartFile multipartFile , @RequestParam("driverId") String driverId ,@RequestParam("view") String view){

        String pathDirectory = "E:\\Dilan-Spring-Car-Rental\\Easy-Car-Rental-React\\Back-End\\src\\main\\resources\\static\\IdCardImage";
        if (searchFileUtil.searchFile(pathDirectory,driverId+view+".jpeg")){
            Files.copy(multipartFile.getInputStream(),Paths.get(pathDirectory+File.separator+driverId+view+".jpeg"),StandardCopyOption.REPLACE_EXISTING);
            return new ResponseUtil(200,"Driver Id Image Updated",null);
        }
        return new ResponseUtil(200,"Driver IdImage Fail",null);
    }*/


/*    @SneakyThrows
    @PostMapping(path = "updateDriverLicenseImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateDriverLicenseImage(@RequestParam(value = "licenseImage") MultipartFile multipartFile , @RequestParam("driverId") String driverId ,@RequestParam("view") String view){

        String pathDirectory = "E:\\CarRental System Assignment\\Car-Rental-System-New\\src\\main\\resources\\static\\LicenseImage\\";
        if (searchFileUtil.searchFile(pathDirectory,driverId+view+".jpeg")){
            Files.copy(multipartFile.getInputStream(),Paths.get(pathDirectory+File.separator+driverId+view+".jpeg"),StandardCopyOption.REPLACE_EXISTING);
            return new ResponseUtil(200,"Driver LicenseImage Updated",null);
        }
        return new ResponseUtil(200,"Driver License Image Fail",null);
    }*/



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------



    @SneakyThrows
    @DeleteMapping(path = "deleteIdImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteIdImage(@RequestParam String driverId){
        String pathDirectory = "D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\Image\\licenceImage";
        String [] idImageView={"Front","Back", "Side","Interior"};

        for (int i=0; i<idImageView.length; i++){
            Files.deleteIfExists(Paths.get(pathDirectory+File.separator+driverId+idImageView[i]+".jpeg"));
        }

        return new ResponseUtil(200,"Id Images Delete success",null);
    }

/*    @SneakyThrows
    @DeleteMapping(path = "deleteLicenseImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteLicenseImage(@RequestParam String driverId){
        String pathDirectory = "E:\\Dilan-Spring-Car-Rental\\Easy-Car-Rental-React\\Back-End\\src\\main\\resources\\static\\LicenseImage\\";
        String [] licenseImageView={"Front","Back"};

        for (int i=0; i<licenseImageView.length; i++){
            Files.deleteIfExists(Paths.get(pathDirectory+File.separator+driverId+licenseImageView[i]+".jpeg"));
        }

        return new ResponseUtil(200,"Id Images Delete success",null);
    }*/

}