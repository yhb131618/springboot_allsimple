package com.bit.allsimple.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.bit.allsimple.entity.FileThumbnail; // 올바른 엔티티 클래스 임포트
import com.bit.allsimple.repository.FileThumbnailRepository;
import com.bit.allsimple.service.FileThumbnailService;

import io.minio.BucketExistsArgs;
import io.minio.GetPresignedObjectUrlArgs;
import io.minio.MakeBucketArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import io.minio.http.Method;

@Service
public class FileThumbnailServiceImpl implements FileThumbnailService {
    @Autowired
    private MinioClient minioClient;
    @Autowired
    private FileThumbnailRepository fileThumbnailRepository;

    @Override
    public String uploadThumbnail(MultipartFile file, String bucketName, String directoryName,
            String thumbnailvideoFileName) {
        String fileUrl = "";

        try {
            // 버킷 존재 확인 및 생성
            boolean found = minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
            if (!found) {
                minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
            }
            String videoFileName = thumbnailvideoFileName;
            String thumbnailOriginName = file.getOriginalFilename();
            String thumbnailDirectory = directoryName;
            String thumbnailBucket = bucketName;

            String filePath = directoryName + "/" + videoFileName; // 파일 경로 설정
            // 파일 업로드
            minioClient.putObject(
                    PutObjectArgs.builder().bucket(bucketName).object(filePath)
                            .stream(file.getInputStream(), file.getSize(), -1)
                            .contentType(file.getContentType())
                            .build());
            // 사전 서명된 URL 생성
            fileUrl = minioClient.getPresignedObjectUrl(
                    GetPresignedObjectUrlArgs.builder()
                            .method(Method.GET)
                            .bucket(bucketName)
                            .object(filePath)
                            .build());

            // 엔티티 저장
            FileThumbnail fileThumbnail = new FileThumbnail(thumbnailBucket,
                    thumbnailDirectory, thumbnailOriginName,
                    fileUrl, videoFileName);
            fileThumbnailRepository.save(fileThumbnail);
        } catch (Exception e) {
            e.printStackTrace();
            // 오류 처리 및 로깅
            return "Error uploading file: " + e.getMessage();
        }
        return fileUrl;
    }
}
