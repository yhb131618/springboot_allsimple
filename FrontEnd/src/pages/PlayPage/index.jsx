import axios from 'axios';
import React, { useEffect, useState } from 'react';



function Play() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // 데이터를 불러오는 함수
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:8080/files/filelist');
        setFiles(response.data); // 서버로부터 받은 데이터로 상태 업데이트
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []); // 의존성 배열이 빈 배열이므로 컴포넌트 마운트 시 1회 실행


  return (
    <div style={{height: '100vh' , width: '100vW'}}>
      <h2>Uploaded Files</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Bucket Name</th>
            <th>Directory Name</th>
            <th>Original File Name</th>
            <th>Stored File Name</th>

            <th>Play Video</th> {/* 추가된 열 */}
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.fileName}> {/* key는 고유해야 합니다. */}
              <td>{file.fileBucket}</td>
              <td>{file.fileDirectory}</td>
              <td>{file.fileOriginName}</td>
              <td>{file.fileName}</td>
              <td>
                {/* Video Player 추가 */}
                <video width="70%" height="30%" controls>
                  <source src={file.fileUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Play;
