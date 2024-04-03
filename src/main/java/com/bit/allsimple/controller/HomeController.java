package com.bit.allsimple.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bit.allsimple.entity.File;
import com.bit.allsimple.service.impl.FileStorageServiceImpl;

@Controller
public class HomeController {
    @Autowired
    private FileStorageServiceImpl fileStorageService;

    @RequestMapping("/")
    public String home() {
        return "file";
    }

    @RequestMapping("/filelist")
    public String listFiles(Model model) {
        List<File> files = fileStorageService.getFileList(); // 파일 목록 가져오기
        model.addAttribute("files", files); // 모델에 파일 목록 추가
        return "filelist"; // 파일 목록을 보여줄 JSP 페이지의 이름 (fileList.jsp)
    }
}
