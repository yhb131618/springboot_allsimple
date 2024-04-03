import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.scss';


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
<div className="grid-container">
            {files.map((file, index) => (
                <div className="grid-item" key={index}>
                    <div className="video-player" style={{ marginTop: '10px' }}>
                        <video width="100%" controls>
                            <source src={file.fileUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p><strong>{file.fileName}</strong></p>
                    <p>채널이름</p>
                    <p>조회수  / 업로드 시간</p>               
                </div>
            ))}
        </div>
    );
}


export default Play;
