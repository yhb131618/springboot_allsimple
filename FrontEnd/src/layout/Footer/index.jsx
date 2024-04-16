import BusinessIcon from '@mui/icons-material/Business'; // 회사 아이콘
import EmailIcon from '@mui/icons-material/Email'; // 이메일 아이콘
import LocationOnIcon from '@mui/icons-material/LocationOn'; // 위치 아이콘
import PhoneIcon from '@mui/icons-material/Phone'; // 전화 아이콘
import React from 'react';

const Footer = () => {
  return (
    <div className='bottom-0 p-1 bg-gray-200 w-full h-auto text-sm flex flex-col justify-center items-center '>
      {/* 첫 번째 줄 */}
      <div className='bottom-0 bg-gray-200 w-full h-auto text-sm flex flex-col md:flex-row justify-center items-center  md:space-y-0 md:space-x-10'>
    
      <div>
        <PhoneIcon className="mr-2" />연락처: 010-3798-1318 
      </div>
      <div>
        <EmailIcon className="mr-2" />이메일: yhb131618@naver.com 
      </div>
      <div>
        <LocationOnIcon className="mr-2" />주소: 서울특별시 성동구 송정동 16길 
      </div>
      <div>
        <BusinessIcon className="mr-2" />회사: © AllSimple. All Rights Reserved. 
      </div>
      </div>
      {/* 두 번째 줄 */}
      <div className='flex justify-center items-center space-x-10 font-semibold'>
        <div> 2024 Yang Hongbin</div>
      </div>
    </div>
  )
}

export default Footer;
