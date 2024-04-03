package com.bit.allsimple.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit.allsimple.entity.Comment;
import com.bit.allsimple.repository.CommentRepository;

@RestController
@RequestMapping("/api/comments")
public class CommentController { // 오타 수정: CommentController로 변경
    private final CommentRepository commentRepository;

    @Autowired
    public CommentController(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @GetMapping
    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    // 필요한 다른 엔드포인트 정의
}
