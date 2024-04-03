package com.bit.allsimple.dto;

public class FileDto {
    private String fileBucket;
    private String fileDirectory;
    private String fileOriginName;
    private String fileName;
    private String fileUrl;

    // 기본 생성자
    public FileDto() {
    }

    // 매개변수를 가진 생성자
    public FileDto(String fileBucket, String fileDirectory, String fileOriginName, String fileName, String fileUrl) {
        this.fileBucket = fileBucket;
        this.fileDirectory = fileDirectory;
        this.fileOriginName = fileOriginName;
        this.fileName = fileName;
        this.fileUrl = fileUrl;
    }

    // Getter와 Setter 메소드
    public String getFileBucket() {
        return fileBucket;
    }

    public void setFileBucket(String fileBucket) {
        this.fileBucket = fileBucket;
    }

    public String getFileDirectory() {
        return fileDirectory;
    }

    public void setFileDirectory(String fileDirectory) {
        this.fileDirectory = fileDirectory;
    }

    public String getFileOriginName() {
        return fileOriginName;
    }

    public void setFileOriginName(String fileOriginName) {
        this.fileOriginName = fileOriginName;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    // toString() 메소드는 로깅 목적으로 유용할 수 있습니다.
    @Override
    public String toString() {
        return "FileDto{" +
                "fileBucket='" + fileBucket + '\'' +
                ", fileDirectory='" + fileDirectory + '\'' +
                ", fileOriginName='" + fileOriginName + '\'' +
                ", fileName='" + fileName + '\'' +
                ", fileUrl='" + fileUrl + '\'' +
                '}';
    }
}
