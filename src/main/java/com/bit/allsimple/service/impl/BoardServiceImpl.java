package com.bit.allsimple.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bit.allsimple.entity.Board;
import com.bit.allsimple.repository.BoardRepository;
import com.bit.allsimple.service.BoardService;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    BoardRepository boardRepository;

    @Override
    public List<Board> getList() {
        List<Board> list = boardRepository.findAll();
        System.out.println("out: " + list);
        return list;
    }

    @Override
    public void register(Board vo) {
        boardRepository.save(vo);
    }

    @Override
    public Board get(Long board_idx) {
        Optional<Board> vo = boardRepository.findById(board_idx);
        return vo.get();
    }

    @Override
    public void delete(Long board_idx) {
        boardRepository.deleteById(board_idx);
    }

    @Override
    public void update(Board vo) {
        boardRepository.save(vo); // insert, update
    }

    @Override
    public void increaseViewCount(Long board_idx) {
        Board board = boardRepository.findById(board_idx)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다. id=" + board_idx));
        board.setBoard_count(board.getBoard_count() + 1); // 조회수 1 증가
        boardRepository.save(board); // 변경된 정보를 데이터베이스에 저장
    }
}
