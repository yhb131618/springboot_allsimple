package com.bit.allsimple.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bit.allsimple.entity.Board;
import com.bit.allsimple.service.BoardService;

@Controller
// 해당 클래스가 웹 요청을 처리하는 컨트롤러임을 알림
// 요청에 때라 적절한 비즈니스 로직을 수행하고 결과를 뷰에 전달하는 역할을 한다.
@RequestMapping("/board/*")
public class BoardController {

    @Autowired
    // 필드, 생성자, 메소드 레벨에서 사용되며, 스프링의 의존성 주입을 요청한다.
    BoardService boardService;

    @RequestMapping("/list")
    public String list(Model model) {
        List<Board> list = boardService.getList();
        model.addAttribute("list", list); // ${list}
        return "/board/list"; // /WEB-INF/board/list.jsp
    }

    @GetMapping("/register")
    public String register() {
        return "register"; // /WEB-INF/board/register.jsp
    }

    @PostMapping("/register")
    public String register(Board vo) {
        boardService.register(vo);
        return "redirect:/board/list";
    }

    @GetMapping("/get")
    public @ResponseBody Board get(Long board_idx) {
        Board vo = boardService.get(board_idx);
        boardService.increaseViewCount(board_idx);
        return vo;
    }

    @GetMapping("/remove")
    public String remove(Long board_idx) {
        boardService.delete(board_idx); // 삭제성공
        return "redirect:/board/list";
    }

    @PostMapping("/modify")
    public String modify(Board vo) {
        boardService.update(vo);
        return "redirect:/board/list";
    }

}
