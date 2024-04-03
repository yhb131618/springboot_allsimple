package com.bit.allsimple.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Data;

@Entity
@Data
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentIdx;

    @Column(nullable = false)
    private String commentType; // 게시판 댓글, 동영상 댓글, 쇼핑 댓글

    @Column(nullable = false)
    private String commentContent;

    @ManyToOne
    @JoinColumn(name = "board_idx")
    private Board commentboard; // 게시글에 대한 참조

    @ManyToOne
    @JoinColumn(name = "parent_idx")
    private Comment parent; // 부모 댓글에 대한 참조

    @OneToMany(mappedBy = "parent")
    private List<Comment> replies = new ArrayList<>(); // 대댓글 목록
}
