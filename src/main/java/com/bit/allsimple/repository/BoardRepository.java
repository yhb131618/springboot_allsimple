package com.bit.allsimple.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bit.allsimple.entity.Board;

@Repository // 생략
public interface BoardRepository extends JpaRepository<Board, Long> {
    // CRUD Method JpaRepository<Board, Long>
    // 테이블 이름 Board , Primary Key 타입 Long>
    // Long: idx primarykey type
    // 쿼리 메서드44
    // public List(Board) FindAll(List<Board> findByClass(Class<?> class);
    // -> select * from Board6
    // public Board findById(Long idx);
    // -> select * from Board where idx=#{idx}
    // public Board findBoardByWriter(String writer);
    // -> select * from Board where writer=#{writer}

}
