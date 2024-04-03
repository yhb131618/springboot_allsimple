package com.bit.allsimple.service;

import java.util.List;

import com.bit.allsimple.entity.Board;

public interface BoardService {

    public List<Board> getList(); // 전체리스트

    public void register(Board vo);// 글등록

    public Board get(Long board_idx); // 상세보기

    public void delete(Long board_idx); // 삭제

    public void update(Board vo);// 수정

    void increaseViewCount(Long board_idx);

}
