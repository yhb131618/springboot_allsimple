<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<%@taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<c:set var="cpath" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>  <script type="text/javascript">
   $(document).ready(function(){
     var regForm=$("#regForm");
     $("button").on("click", function(e){
        var oper=$(this).data("oper");
        if(oper=='register'){
            regForm.submit();
        }else if(oper=='reset'){
            regForm[0].reset();
        }else if(oper=='list'){
            location.href="${cpath}/board/list";
        }else if(oper=='remove'){
            var board_idx=regForm.find("#board_idx").val();
            location.href="${cpath}/board/remove?board_idx="+board_idx;
        }else if(oper=='updateForm'){
            regForm.find('#board_title').attr("readonly",false);
            regForm.find('#board_content').attr("readonly",false);
            var upBtn="<button type='button' onclick='goUpdate()' class='btn btn-sm btn-info'>수정완료</button>";
            $("#update").html(upBtn);
        }
     });
      // a tag 클릭시 상세보기
      $("a").on("click", function(e){
         e.preventDefault();
         var board_idx=$(this).attr("href");
        $.ajax({
           url: "${cpath}/board/get",
           type: "get",
           data: {"board_idx":board_idx},
           dataType: "json",
           success: printBoard,
           error: function() {alert('error');}
        });
      });
   });
   function printBoard(vo){
    var regForm=$("#regForm");
    regForm.find("#board_title").val(vo.board_title);
    regForm.find("#board_content").val(vo.board_content);
    regForm.find("#board_idx").val(vo.board_idx);
    regForm.find("#board_writer").val(vo.board_writer);
    regForm.find("input").attr("readonly",true); // 읽기전용
    regForm.find("textarea").attr("readonly",true);
    $("#regDiv").css("display", "none");
    $("#updateDiv").css("display", "block");
   
   }

   function goUpdate(){
      var regFrom=$("#regForm");
      regFrom.attr("action", "${cpath}/board/modify");
      regFrom.submit();
   }
    



  </script>
</head>
<body>
 
<div class="card">
  
  <div class="card-header">
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1>Spring MVC</h1>
        <div class="panel-footer">처음부터 시작하는 </div>
    </div>    
    </div>
  </div>
  
  <div class="card-body">
      <div class=row>
      <div class="col-lg-2">
        <div class="card" style="min-height:500px; max-height: 1000px">
        <h4 class="card-title"><sec:authentication property="principal.member.name"/></h4>
        <%-- 스프링시큐리티 인증 정보가 메모리에 있는 상태에서 그 정보를 가져오는 문법 --%>
        <p class="card-text">회원님 환영합니다.</p>
               <form action="${cpath}/member/logout">
                 <button type="submit" class="btn btn-sm btn-primary form-control">로그아웃</button>
               </form>
                <br/>
                  <sec:authorize access="hasRole('ROLE_ADMIN')">
                    <div><sec:authentication property="principal.member.role"/> MENU</div>
                    - 메뉴리스트 -
                  </sec:authorize>
                    <sec:authorize access="hasRole('ROLE_MANAGER')">
                    <div><sec:authentication property="principal.member.role"/> MENU</div>
                    - 메뉴리스트 -
                  </sec:authorize>
                    <sec:authorize access="hasRole('ROLE_MEMBER')">
                    <div><sec:authentication property="principal.member.role"/> MENU</div>
                    - 메뉴리스트 -
                  </sec:authorize>
        </div>        
      </div>
      <div class="col-lg-5"> 
          <div class="card" style="min-height:500px; max-height: 1000px">
             <div class="card-body">
             <table class="table table-hober">
               <thead>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>작성자</th>
                  <th>조회수</th>
               </thead>
               <tbody>
                <c:forEach var="vo" items="${list}">
                 <tr>
                    <td>${vo.board_idx}</td>
                    <td><a href="${vo.board_idx}">${vo.board_title}</a></td>
                    <td><fmt:formatDate pattern="yyyy-MM-dd hh:mm" value="${vo.board_indate}"/></td>
                    <td>${vo.board_writer}</td>
                    <td>${vo.board_count}</td>
                 </tr>  
                </c:forEach>
               </tbody>  
             </table>
             </div>
          </div>
      </div>
      <div class="col-lg-5">
          <div class="card" style="min-height:500px; max-height: 1000px">
            <div class="card-body">
                <form id="regForm" action ="${cpath}/board/register" method="post">
                  <input type="hidden" id="board_idx" name="board_idx" value= "${vo.board_idx}" />
                  <div class="form-group">
                    <label for="title">제목:</label>
                    <input type="text" class="form-control" id="board_title" name="board_title" placeholder="Enter title"/>
                  </div>
                  <div class="form-group">
                    <label for="content">내용:</label>
                    <textarea row = "12" type="text" class="form-control" id="board_content" name="board_content"></textarea>
                   <%-- name을 기준으로 form을 보낸다. --%>
                  </div>
                  <div class="form-group">
                    <label for="title">작성자:</label>
                    <input type="text" class="form-control" id="board_writer" name="board_writer" readonly="readonly" value='<sec:authentication property="principal.username"/>'/>
                  </div>
                  <div id="regDiv">
                      <button type="button" data-oper="register" class="btn btn-sm btn-primary" >등록</button>
                      <button type="button" data-oper="reset" class="btn btn-sm btn-warning" >취소</button>
                  </div>
                  <div id="updateDvi" style="display: none">
                       <button type="button" data-oper="list" class="btn btn-sm btn-primary" >목록</button>
                       <c:if test="${user.username eq vo.board_writer}">
                        <span id="update"><button type="button" data-oper="updateForm" class="btn btn-sm btn-warning" >수정</button></span>
                        <button type="button" data-oper="remove" class="btn btn-sm btn-success" >삭제</button>
                       </c:if>
                       <c:if test="${user.username ne vo.board_writer}">
                        <span id="update"><button type="button" disabled="disabled" data-oper="updateForm" class="btn btn-sm btn-warning" >수정</button></span>
                        <button type="button" data-oper="remove" disabled="disabled" class="btn btn-sm btn-success" >삭제</button>
                       </c:if>                       
                  </div>
                </form>   
            </div>
          </div>
      </div>
  </div>
  
  <div class="card-footer">All SIMPLE</div>

</div>

</body>
</html>