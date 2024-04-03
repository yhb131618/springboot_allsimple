package com.bit.allsimple.service.impl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.bit.allsimple.entity.File;
import com.bit.allsimple.repository.FileRepository;
import com.bit.allsimple.service.FileService;

import io.minio.BucketExistsArgs;
import io.minio.GetPresignedObjectUrlArgs;
import io.minio.MakeBucketArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import io.minio.http.Method;

@Service
public class FileStorageServiceImpl implements FileService {
    @Autowired
    private MinioClient minioClient;
    @Autowired
    private FileRepository fileRepository;

    @Override
    public String uploadFile(MultipartFile file, String bucketName, String directoryName) {
        String fileUrl = "";
        try {
            // 버킷이 존재하지 않는 경우 생성
            boolean found = minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
            if (!found) {
                minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
            }

            // 파일 이름 앞에 'play/' 디렉토리 경로 추가
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyMMdd");
            String formattedDate = dateFormat.format(new Date());

            String fileName = directoryName + "/" + formattedDate + "_" + file.getOriginalFilename();
            String fileOriginName = file.getOriginalFilename();
            String fileDirectory = directoryName;
            String fileBucket = bucketName;
            minioClient.putObject(
                    PutObjectArgs.builder().bucket(bucketName).object(fileName)
                            .stream(file.getInputStream(), file.getSize(), -1)
                            .contentType(file.getContentType())
                            .build());
            // 사전 서명된 URL 생성
            fileUrl = minioClient.getPresignedObjectUrl(
                    GetPresignedObjectUrlArgs.builder()
                            .method(Method.GET)
                            .bucket(bucketName)
                            .object(fileName)
                            // .expiry(10 * 60) // 10분 후 만료
                            .build());

            try {
                File files = new File(fileBucket, fileDirectory, fileOriginName, fileName, fileUrl);
                fileRepository.save(files);
            } catch (Exception e) {
                e.printStackTrace();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return fileUrl;
    }

    public String getDownloadUrl(String fileName, String bucketName, String directoryName) {
        fileName = directoryName + "/" + System.currentTimeMillis() + "_" + fileName;
        try {
            return minioClient.getPresignedObjectUrl(
                    GetPresignedObjectUrlArgs.builder()
                            .method(Method.GET)
                            .bucket(bucketName)
                            .object(fileName)
                            // .expiry(10 * 60) // 10분 후 만료
                            .build());
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }

    @Override
    public List<File> getFileList() { // 전체리스트
        List<File> list = fileRepository.findAll();
        System.out.println("out: " + list);
        return list;
    }

    @Override
    public void update(String bucketName, String fileName, Long fileIdx) {
        try {
            // 사전 서명된 URL 생성
            String fileUrl = minioClient.getPresignedObjectUrl(
                    GetPresignedObjectUrlArgs.builder()
                            .method(Method.GET)
                            .bucket(bucketName)
                            .object(fileName)
                            .expiry(10 * 60) // 10분 후 만료
                            .build());

            // 파일 정보 조회 (예시, 실제 구현에 따라 달라질 수 있음)
            Optional<File> existingFile = fileRepository.findById(fileIdx);
            if (existingFile.isPresent()) {
                File fileToUpdate = existingFile.get();
                // URL만 업데이트
                fileToUpdate.setFileUrl(fileUrl); // setFileUrl 메소드가 File 클래스에 정의되어 있어야 합니다.
                fileRepository.save(fileToUpdate); // 수정된 파일 정보 저장
            } else {
                throw new Exception("File not found with ID: " + fileIdx);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
