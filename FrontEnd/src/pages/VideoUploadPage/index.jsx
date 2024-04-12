import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useState } from 'react';

const VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // Assuming fixed values for bucketName and directoryName for simplicity
  // You can also set these from the UI as needed
  const [bucketName, setBucketName] = useState('test');
  const [directoryName, setDirectoryName] = useState('video');
  const [videoName, setVideoName] = useState(''); 
  const [videoTag, setVideoTag] = useState(''); 
  const [thumbNailImage, setThumbNailImage] = useState(''); 
  const [selectedThumbNailFile, setSelectedThumbNailFile] = useState(null);
  const [thumbNailBucketName, seTthumbNailBucketName] = useState('test'); 
  const [thumbNailDirectoryName, setThumbNailDirectoryName] = useState('thumbNail'); 
  const [videoFileName, setVideoFileName] = useState(''); // 동영상 파일 이름을 저장할 상태
  const [videoChannelName, setvideoChannelName] = useState('test'); // 동영상 파일 이름을 저장할 상태


  // 상태를 초기화하는 함수
  const handleReset = () => {
    setSelectedFile(null);
    setVideoName('');
    setVideoTag('');
    setThumbNailImage('');
    setVideoFileName('');
  };
 

  // 비디오 이름과 시간을 업데이트하기 위한 핸들러 추가
  const handleVideoNameChange = (event) => {
    setVideoName(event.target.value);
  };

  const handleVideoTagChange = (event) => {
    setVideoTag(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        setSelectedFile(file); // 파일 상태 업데이트
        const timestamp = Date.now(); // 현재 시간의 타임스탬프
        // 파일 이름, 타임스탬프, bucketName을 결합하여 상태 업데이트
        setVideoFileName(`${bucketName}_${timestamp}_${file.name} `);
        console.log(setVideoFileName);
    }
};

  // 썸네일 파일 변경을 처리하는 핸들러
  const handleThumbNailFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedThumbNailFile(file); // 선택된 썸네일 파일 상태 업데이트
    previewFile(file); // 파일 미리보기 생성
  };

  // 파일 미리보기를 생성하는 함수
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setThumbNailImage(reader.result); // 미리보기 URL을 상태로 설정
    };
  };

  const handleUpload = async () => {
    // 파일 업로드를 위한 formData 준비
    const uploadFormData = new FormData();
    uploadFormData.append('file', selectedFile);
    uploadFormData.append('bucketName', bucketName);
    uploadFormData.append('directoryName', directoryName);
    uploadFormData.append('videoFileName', videoFileName);

    const thumbNailFormData = new FormData();
    thumbNailFormData.append('file', selectedThumbNailFile);
    thumbNailFormData.append('thumbNailBucketName', thumbNailBucketName);
    thumbNailFormData.append('thumbNailDirectoryName', thumbNailDirectoryName);
    thumbNailFormData.append('filevideoFileName', videoFileName);

    // 비디오 정보 제출을 위한 formData 준비
    const videoInfoFormData = new FormData();
    videoInfoFormData.append('vedeoinfoName', videoName);
    videoInfoFormData.append('vedeoinfoTag', videoTag);
    videoInfoFormData.append('videoinfoChannel', videoChannelName);
    videoInfoFormData.append('filevideoFileName', videoFileName);
    // 필요한 경우 파일도 포함시킬 수 있습니다.
    // videoInfoFormData.append('file', selectedFile);
  
    try {
      // 썸네일 업로드
      const thumbNailResponsePromise = axios.post('${process.env.REACT_APP_BACKEND_URL}/thumbnail/thumbnailUpload', thumbNailFormData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        });
      // 파일 업로드 요청
      const uploadResponsePromise = axios.post('${process.env.REACT_APP_BACKEND_URL}/files/upload', uploadFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // 비디오 정보 제출 요청
      const videoInfoResponsePromise = axios.post('${process.env.REACT_APP_BACKEND_URL}/video/videoInfoSet', videoInfoFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // 두 요청이 성공적으로 완료되었는지 확인
      const [uploadResponse, videoInfoResponse, thumbNailResponse] = await Promise.all([uploadResponsePromise, videoInfoResponsePromise, thumbNailResponsePromise]);
  
      alert('File and video info submitted successfully');
      console.log('Upload response:', uploadResponse.data);
      console.log('Video info response:', videoInfoResponse.data);
      console.log('thumbNailResponsePromise :', thumbNailResponse.data);
    } catch (error) {
      console.error('Error uploading file or submitting video info:', error);
      alert('Error uploading file or submitting video info');
    }
  };
  


  
  return (

    <div className="w-full max-w-xs mx-auto space-y-4">
    <Typography component='h1' variant='h6'> 동영상 업로드 </Typography>
    <div className="flex items-center space-x-2">
    <input type="file" onChange={handleFileChange} 
        className="block text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100"
        />
    </div>
 


    <Typography component='h1' variant='h6'> 썸네일 업로드 </Typography>
    <div className="flex items-center space-x-2">
    <div>
    <input type="file" accept="image/*" onChange={handleThumbNailFileChange} 
        className="block text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100"
        />
    {thumbNailImage && <img src={thumbNailImage} alt="Preview" style={{width: "100%", height: "auto"}} />}
    </div>

    </div>


  
 
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <Typography component='h' variant='h6'> ※ 동영상 제목을 입력해주세요 </Typography>
            <div>
                <TextField
                required
                id="outlined-required"
                label="동영상 제목(추후 정규식 업데이트)"
                placeholder="Video Name"
                onChange={handleVideoNameChange}
                variant="outlined"
                />
            </div>
            <Typography component='h' variant='h6'> ※ 동영상 태그를 입력해주세요.</Typography>
            <div>
                <TextField
                required
                id="outlined-required"
                label="하나만 입력해주세요(추후 여러 태그 업데이트)"
                placeholder="Video Tag"
                onChange={handleVideoTagChange}
                variant="outlined"
                />
            </div>
        </Box>
      
      {/* Update these inputs to use the new handlers */}
    

    <br>
    </br>
    <div className="flex  items-center space-x-1">
        <button 
          onClick={handleUpload}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700"
        >Upload</button>

        <button 
          onClick={handleReset}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-gray-700"
        >Reset</button>
      </div>

      

    </div>
  );
}
export default VideoUpload;
