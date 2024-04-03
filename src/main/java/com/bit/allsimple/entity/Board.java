package com.bit.allsimple.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.Data;

@Entity // DataBase의 Table
@Data // Lombok 라이브러리
      // 클래스에 자동으로 getter, setter, toString, equals, hashCode 메소드를 생성
public class Board { // VO<--ORM-->Table

    @Id // PK
    @GeneratedValue(strategy = GenerationType.IDENTITY) // GenerationType.IDENTITY 자동증가 컬럼을 만들 때 쓴다
    private Long board_idx; // 자동증가

    private String board_title;
    private String board_writer;
    @Lob // text
    private String board_content;

    // @Column(insertable = false, updatable = false, columnDefinition = )
    // private String member_id; // 왜래키

    @Column(insertable = false, updatable = false, columnDefinition = "datetime default now()")
    private Date board_indate; // now()
    // columnDefinition 컬럼 조건
    // insertable 입력을 받지 않겠다.
    // updatable = false 수정하지 않겠다.

    @Column(insertable = false, updatable = false, columnDefinition = "int default 0")
    private Integer board_count;

    void increaseViewCount() {
        this.board_count++;
    }
}
