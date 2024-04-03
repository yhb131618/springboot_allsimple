package com.bit.allsimple.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bit.allsimple.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    // 필요한 쿼리 메서드 정의
}
