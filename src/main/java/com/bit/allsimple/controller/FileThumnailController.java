package com.bit.allsimple.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.bit.allsimple.service.FileThumbnailService;
import com.bit.allsimple.service.impl.FileThumbnailServiceImpl;

@RestController
@RequestMapping("/thumbnail/*")
public class FileThumnailController {
    private FileThumbnailService fileThumbnailService;

    public FileThumnailController(FileThumbnailServiceImpl fileThumbnailService) {
        this.fileThumbnailService = fileThumbnailService;
    }

    // 파일 업로드
    @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = { RequestMethod.GET,
            RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS })

    @PostMapping("/thumbnailUpload")
    public ResponseEntity<?> uploadFile(
            @RequestPart("file") MultipartFile file,
            @RequestParam("thumbNailBucketName") String bucketName,
            @RequestParam("thumbNailDirectoryName") String directoryName,
            @RequestParam("filevideoFileName") String videoFileName) {
        // 파일 이름 가져오기
        try {

            String fileUrl = fileThumbnailService.uploadThumbnail(file, bucketName, directoryName, videoFileName);
            System.out.println(fileUrl);
            return ResponseEntity.ok().body(Map.of("message", "File uploaded successfully", "url", fileUrl));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("message", "File upload failed", "error", e.getMessage()));
        }
    }

}
