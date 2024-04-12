package com.bit.allsimple.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.bit.allsimple.entity.File;

public interface FileService {

    public String uploadFile(MultipartFile file, String bucketName, String directoryName, String videoFileName);

    public String getDownloadUrl(String fileName, String bucketName, String directoryName);

    public List<File> getFileList(); // 전체리스트

    public void update(String bucketName, String fileName, Long fileIdx);
}
