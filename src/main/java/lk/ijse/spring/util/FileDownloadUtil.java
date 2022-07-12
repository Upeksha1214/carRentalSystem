package lk.ijse.spring.util;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Component;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

@Component
public class FileDownloadUtil {
    private Path foundFile;


    public Resource getFileAsResource(String carId, String carView) {
        String pathDirectory="D:\\SpringProject\\CarRentalSystem\\src\\main\\resources\\static\\image\\";
        Path path = Paths.get(pathDirectory+"/" + carId + carView + ".jpeg");
        Resource resource = null;

        try {
            resource = new UrlResource(path.toUri());

        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        return resource;

    }
}