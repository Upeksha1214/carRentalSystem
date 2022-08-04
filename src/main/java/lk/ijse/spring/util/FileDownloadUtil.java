package lk.ijse.spring.util;

import lk.ijse.spring.dto.ImageDTO;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;





@Component
public class FileDownloadUtil {
    private Path foundFile = null;


    private void searchFile(Path path, String fileName) {
        foundFile = null;
        try {
            Files.list(path).forEach(file -> {
                if (file.getFileName().toString().startsWith(fileName)) {
                    System.out.println("file  found");
                    foundFile = file;
                    return;
                }
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public Resource getFileAsResource(ImageDTO imageDTO) {

        String pathDirectory = null;
        Path path = null;
        String imageName = imageDTO.getImageId() + imageDTO.getImageView() + ".jpeg";

        switch (imageDTO.getImageType()) {

            case "car":
                pathDirectory = "D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\image\\carImage";
                path = Paths.get(pathDirectory);
                searchFile(path, imageName);
                break;

            case "driverLicence":
                pathDirectory = "D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\image\\licenceImage";
                path = Paths.get(pathDirectory);
                searchFile(path, imageName);
                break;

            case "idCard":
                pathDirectory = "D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\image\\idCardImage";
                path = Paths.get(pathDirectory);
                searchFile(path, imageName);
                break;


        }
        try {
            if (foundFile != null) {
                return new UrlResource(foundFile.toUri());
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        return null;

    }
}




    /*public Resource getFileAsResource(ImageDTO imageDTO) {

        String pathDirectory = null;
        Path path = null;

        switch (imageDTO.getImageType()) {

            case "car":
                pathDirectory = "D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\image\\carImage";
                path = Paths.get(pathDirectory);
                String imageName = imageDTO.getImageId() + imageDTO.getImageView() + ".jpeg";
                searchFile(path, imageName);
                break;

            case "licence":
                pathDirectory = "D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\image\\licenceImage";
                path = Paths.get(pathDirectory + "/" + imageDTO.getImageId() + imageDTO.getImageType() + ".jpeg");
                break;

            case "idCard":
                pathDirectory = "D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\image\\idCardImage";
                path = Paths.get(pathDirectory + "/" + imageDTO.getImageId() + imageDTO.getImageType() + ".jpeg");
                break;

        }


        try {
            if (foundFile != null) {
                return new UrlResource(foundFile.toUri());
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        return null;

    }*/