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
public class FileThumbnail {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long thumbnailIdx;
    private String thumbnailBucket;
    private String thumbnailDirectory;
    private String thumbnailOriginName;
    @Column(insertable = false, updatable = false, columnDefinition = "datetime default now()")
    private Date thumbnailDate;
    @Lob
    private String thumbnailUrl;
    private String filevideoFileName;

    // 기본 생성자 추가
    protected FileThumbnail() {
    }

    public FileThumbnail(String thumbnailBucket, String thumbnailDirectory, String thumbnailOriginName,
            String thumbnailUrl, String filevideoFileName) {
        this.thumbnailBucket = thumbnailBucket; // 버킷은 사용자 id로 생성
        this.thumbnailDirectory = thumbnailDirectory; // 디렉토리는 해당 페이지 이름으로 생성(게시판,컨텐츠, 쇼핑)
        this.thumbnailOriginName = thumbnailOriginName;
        this.thumbnailUrl = thumbnailUrl;
        this.filevideoFileName = filevideoFileName;
    }
}
