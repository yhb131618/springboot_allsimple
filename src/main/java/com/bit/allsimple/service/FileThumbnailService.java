package com.bit.allsimple.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileThumbnailService {

    public String uploadThumbnail(MultipartFile file, String bucketName, String directoryName, String videoFileName);

}
