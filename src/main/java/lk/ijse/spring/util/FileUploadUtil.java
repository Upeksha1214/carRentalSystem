package lk.ijse.spring.util;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Component
public class FileUploadUtil {
    public static void saveFile(String fullPathWithFileName , MultipartFile multipartFile){
        Path uploadDirectory = Paths.get(fullPathWithFileName);

        InputStream inputStream= null;
        try {
            inputStream = multipartFile.getInputStream();

            Files.copy(inputStream,uploadDirectory, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}
