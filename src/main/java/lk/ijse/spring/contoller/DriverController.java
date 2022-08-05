package lk.ijse.spring.contoller;

import lk.ijse.spring.dto.RegisterDriverDTO;
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
    public ResponseUtil saveDriver(@RequestBody RegisterDriverDTO dto) {
        driverService.saveDriver(dto);
        return new ResponseUtil(200, "Successfully Driver Saved.", null);
    }

    @PutMapping(path = "updateDriver" , produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateDriver(@RequestBody RegisterDriverDTO dto) {
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
        List<RegisterDriverDTO> allDrivers = driverService.getAllDrivers();
        return new ResponseUtil(200,"Get All Drivers",allDrivers);    }


    @GetMapping(params = {"ids"})
    public ResponseUtil generateDriverIds(@RequestParam String ids) {
        return new ResponseUtil(200, "Ok", driverService.generateDriverId());
    }




    @SneakyThrows
    @PostMapping(path = "addDriverLicenseImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadDriverLicenseImage(@RequestParam("param") MultipartFile[] multipartFile , @RequestParam("driverId") String driverId) {

        String pathDirectory = "D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\Image\\licenceImage\\";
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

    
    @GetMapping(path = "getIdImage" , produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<?> getIdImage(@RequestParam String driverId,@RequestParam String view){
        ImageDTO imageDTO = new ImageDTO(driverId, "driverLicence", view);
        Resource fileAsResource = fileDownloadUtil.getFileAsResource(imageDTO);

        if (fileAsResource==null){
            return ResponseEntity.badRequest().contentType(MediaType.APPLICATION_JSON).body("Driver Image not found");
        }
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(fileAsResource);
    }



    @SneakyThrows
    @DeleteMapping(path = "deleteIdImage",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteIdImage(@RequestParam String driverId){
        String pathDirectory = "D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\Image\\licenceImage\\";
        String [] idImageView={"Front","Back", "Side","Interior"};

        for (int i=0; i<idImageView.length; i++){
            Files.deleteIfExists(Paths.get(pathDirectory+File.separator+driverId+idImageView[i]+".jpeg"));
        }

        return new ResponseUtil(200,"Id Images Delete success",null);
    }



}