import axios from 'axios';
import React, { useState } from 'react';




const VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // Assuming fixed values for bucketName and directoryName for simplicity
  // You can also set these from the UI as needed
  const [bucketName, setBucketName] = useState('');
  const [directoryName, setDirectoryName] = useState('');
  const [videoName, setVideoName] = useState(''); 
  const [videoTag, setVideoTag] = useState(''); 
  const [videoLike, setVideoLike] = useState(''); 
  const [videoDislike, setVideoDislike] = useState(''); 



  // 비디오 이름과 시간을 업데이트하기 위한 핸들러 추가
  const handleVideoNameChange = (event) => {
    setVideoName(event.target.value);
  };

  const handleVideoTagChange = (event) => {
    setVideoTag(event.target.value);
  };
  const handleVideoLikeChange = (event) => {
    setVideoLike(event.target.value);
  };

  const handleVideoDislikeChange = (event) => {
    setVideoDislike(event.target.value);
  };
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleBucketNameChange = (event) => {
    setBucketName(event.target.value);
  };

  const handleDirectoryNameChange = (event) => {
    setDirectoryName(event.target.value);
  };


  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    // Add bucketName and directoryName to the formData
    formData.append('bucketName', bucketName);
    formData.append('directoryName', directoryName);

      // Logging the formData keys and values
    for (let key of formData.keys()) {
        console.log(key, formData.get(key));
    }
    
    // Logging the state values
    console.log('Uploading with bucketName:', bucketName, 'and directoryName:', directoryName);



    try {
      const response = await axios.post('http://localhost:8080/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(JSON.stringify(response.data));
      console.log('Upload response:', response.data);
    } catch (error) {
        alert(`Error uploading file: ${error.response.data.error}`);
      console.error('Error uploading file:', error);
      alert(`Error uploading file: ${error.response.data.error}`);
    }
  };

  const handleSubmitVideoInfo = async () => {
    const formData = new FormData();
    formData.append('videoName', videoName);
    formData.append('videoTag', videoTag);
    formData.append('file', selectedFile); // 선택적으로 파일도 포함시킬 수 있습니다.
    formData.append('videoLike', videoLike);
    formData.append('videoDislike', videoDislike);
    try {
      const response = await axios.post('http://localhost:8080/files/video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Video info submitted successfully');
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting video info:', error);
      alert('Error submitting video info');
    }
  };


  
  return (
    <div className="w-full max-w-xs mx-auto space-y-4">
      <input type="file" onChange={handleFileChange} 
          className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
          />
      {/* Update these inputs to use the new handlers */}
      <input type="text"  onChange={handleBucketNameChange} placeholder="Bucket Name" />
      <input type="text"  onChange={handleDirectoryNameChange} placeholder="Directory Name" />

      <button 
      onClick={handleUpload}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700"
      >Upload</button>
      
      <p비디오 정보를 입력해주세요/>
      <input type="text" onChange={handleVideoNameChange} placeholder="Video Name" />
      <input type="text" onChange={handleVideoTagChange} placeholder="Video Tag" />
      <input type="text" onChange={handleVideoLikeChange} placeholder="Video Like" />
      <input type="text" onChange={handleVideoDislikeChange} placeholder="Video Dislike" />

      <button 
      onClick={handleSubmitVideoInfo} 
      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700"
      >Video Info</button>
    </div>
  );
}
export default VideoUpload;
