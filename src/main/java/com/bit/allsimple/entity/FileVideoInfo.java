package com.bit.allsimple.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity
public class FileVideoInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long videoInfoIdx;

    private String videoInfoName;
    private String videoInfoTag;
    private String videoInfoChannel;

    @Temporal(TemporalType.TIMESTAMP)
    private Date videoInfoDate;

    @Column(insertable = false, columnDefinition = "INTEGER DEFAULT 0")
    private Integer videoInfoLike;

    @Column(insertable = false, columnDefinition = "INTEGER DEFAULT 0")
    private Integer videoInfoDislike;

    private String fileVideoFileName;

    protected FileVideoInfo() {
    }

    public FileVideoInfo(String videoInfoName, String videoInfoTag, String videoInfoChannel,
            String fileVideoFileName) {
        this.videoInfoName = videoInfoName;
        this.videoInfoTag = videoInfoTag;
        this.videoInfoChannel = videoInfoChannel;
        this.fileVideoFileName = fileVideoFileName;
        // 날짜는 자동으로 현재 날짜로 설정됩니다. (아래 @PrePersist 참고)
    }

    @PrePersist
    protected void onCreate() {
        videoInfoDate = new Date();
    }
}
