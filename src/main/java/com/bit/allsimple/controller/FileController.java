package com.bit.allsimple.controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.bit.allsimple.dto.FileDto;
import com.bit.allsimple.entity.File;
import com.bit.allsimple.service.impl.FileStorageServiceImpl;

@RestController
@RequestMapping("/files/*")
public class FileController {

    @Autowired
    private FileStorageServiceImpl fileStorageService;

    @RequestMapping("/video")
    public String playVideo(@RequestParam("fileUrl") String fileUrl, Model model) {
        model.addAttribute("fileUrl", fileUrl);
        return "video"; // 동영상 플레이어 JSP 파일 이름
    }

    // 파일목록 보여주기
    // @GetMapping("/filelist")
    // @RequestMapping("/filelist")
    // @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods
    // = { RequestMethod.GET,
    // RequestMethod.POST,
    // RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS })
    // public String listFiles(Model model) {
    // List<File> files = fileStorageService.getFileList(); // 파일 목록 가져오기
    // model.addAttribute("files", files); // 모델에 파일 목록 추가
    // return "/filelist"; // 파일 목록을 보여줄 JSP 페이지의 이름 (fileList.jsp)
    // }

    public FileController(FileStorageServiceImpl fileStorageService) {
        this.fileStorageService = fileStorageService;
    }

    @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = { RequestMethod.GET,
            RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS })
    @GetMapping("/filelist")
    public ResponseEntity<List<FileDto>> listFiles() {
        List<File> files = fileStorageService.getFileList(); // 파일 목록 가져오기
        List<FileDto> fileDtos = files.stream()
                .map(file -> new FileDto(
                        file.getFileBucket(),
                        file.getFileDirectory(),
                        file.getFileOriginName(),
                        file.getFileName(),
                        file.getFileUrl()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(fileDtos); // ResponseEntity를 사용하여 상태 코드와 함께 DTO 리스트 반환
    }
    //

    // 파일 업로드
    @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = { RequestMethod.GET,
            RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS })

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(
            @RequestPart("file") MultipartFile file,
            @RequestParam("bucketName") String bucketName,
            @RequestParam("directoryName") String directoryName,
            @RequestParam("videoFileName") String videoFileName) {
        // 파일 이름 가져오기
        try {

            String fileUrl = fileStorageService.uploadFile(file, bucketName, directoryName, videoFileName);
            System.out.println(fileUrl);
            return ResponseEntity.ok().body(Map.of("message", "File uploaded successfully", "url", fileUrl));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("message", "File upload failed", "error", e.getMessage()));
        }
    }

    // 파일 다운로드 URL 가져오기
    @GetMapping("/download")
    public ResponseEntity<?> getDownloadUrl(@RequestParam("fileName") String fileName,
            @RequestParam("bucketName") String bucketName, @RequestParam("directoryName") String directoryName) {
        try {
            String downloadUrl = fileStorageService.getDownloadUrl(fileName, bucketName, directoryName);
            return ResponseEntity.ok().body(Map.of("url", downloadUrl));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", "Failed to get download URL", "error", e.getMessage()));
        }
    }
}
