<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 </head>
<body>

<h2>File Upload</h2>
<!-- 파일 업로드 폼 -->
<c:forEach var="vo" items="${list}">
<form action="/files/upload" method="post" enctype="multipart/form-data">
    Select file to upload:
    <input type="file" name="file"><br><br>
    Bucket Name:
    <input type="text" name="bucketName" value="image"><br><br>
    <input type="text" name="directoryName" value="test"><br><br>
    <input type="submit" value="Upload">
</form>

<h2>Get Download URL</h2>
<!-- 다운로드 URL 요청 폼 -->
<form action="/files/download" method="get">
    File Name:
    <input type="text" name="fileName"><br><br>
    Bucket Name:
    <input type="text" name="bucketName" value="image"><br><br>
    <input type="submit" value="Get Download URL">
</form>



</body>
</html>
