<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>File List</title>
</head>
<body>
<h2>Uploaded Files</h2>
<table border="1">
    <tr>
        <th>Bucket Name</th>
        <th>Directory Name</th>
        <th>Original File Name</th>
        <th>Stored File Name</th>
        <th>File URL</th>
        <th>Play Video</th> <!-- 추가된 열 -->
    </tr>
    <c:forEach var="file" items="${files}">
        <tr>
            <td>${file.fileBucket}</td>
            <td>${file.fileDirectory}</td>
            <td>${file.fileOriginName}</td>
            <td>${file.fileName}</td>
            <td><a href="${file.fileUrl}">${file.fileUrl}</a></td>
            <td>
                <!-- Video Player 추가 -->
                <video width="320" height="240" controls>
                    <source src="${file.fileUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </td>
        </tr>
    </c:forEach>
</table>
</body>
</html>
