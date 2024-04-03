<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Video Player</title>
</head>
<body>
    <h2>Video Player</h2>
    <!-- 동영상 플레이어 -->
    <video width="720" height="405" controls>
        <source src="${fileUrl}" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</body>
</html>
