package com.bit.allsimple.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.Data;

@Data
@Entity
public class File {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long fileIdx;
    private String fileBucket;
    private String fileDirectory;
    private String fileOriginName;
    private String fileName;

    @Column(insertable = false, updatable = false, columnDefinition = "datetime default now()")
    private Date fileDate;
    @Lob
    private String fileUrl;

    // 기본 생성자 추가
    protected File() {
    }

    public File(String fileBucket, String fileDirectory, String fileOriginName, String fileName, String fileUrl) {
        this.fileBucket = fileBucket; // 버킷은 사용자 id로 생성
        this.fileDirectory = fileDirectory; // 디렉토리는 해당 페이지 이름으로 생성(게시판,컨텐츠, 쇼핑)
        this.fileOriginName = fileOriginName;
        this.fileName = fileName;
        this.fileUrl = fileUrl;
    }
}