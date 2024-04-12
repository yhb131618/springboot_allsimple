package com.bit.allsimple.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bit.allsimple.service.impl.FileVideoInfoServiceImple;

@RestController
@RequestMapping("/video/*")
public class FileVidoInfoController {

    @Autowired
    private FileVideoInfoServiceImple FileVideoInfoService;

    // 비디오 정보 저장
    @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = { RequestMethod.GET,
            RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS })
    @PostMapping("/videoInfoSet")
    public ResponseEntity<?> videoInfoSet(
            @RequestParam("vedeoinfoName") String vedeoinfoName,
            @RequestParam("vedeoinfoTag") String vedeoinfoTag,
            @RequestParam("videoinfoChannel") String videoinfoChannel,
            @RequestParam("filevideoFileName") String filevideoFileName) {
        // 파일 이름 가져오기
        try {

            FileVideoInfoService.videoInfoSet(vedeoinfoName, vedeoinfoTag, videoinfoChannel,
                    filevideoFileName);

            return ResponseEntity.ok().body(Map.of("message", "File uploaded successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("message", "File upload failed", "error", e.getMessage()));
        }
    }

}
