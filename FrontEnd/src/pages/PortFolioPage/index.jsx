import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import About from './Sections/About';
import Activity from './Sections/Activity';
import AllsimpleAPI from './Sections/AllsimpleAPI';
import AllsimpleArchitecture from './Sections/AllsimpleArchitecture';
import AllsimpleBlog from './Sections/AllsimpleBlog';
import AllsimpleCert from './Sections/AllsimpleCert';
import AllsimpleDatabase from './Sections/AllsimpleDatabase';
import AllsimpleFront from './Sections/AllsimpleFront';
import Certificate from './Sections/Certificate';
import PortfolioBar from './Sections/PortfolioBar';
import Progress from './Sections/Progress';
import Resume from './Sections/Resume';
import Skill from './Sections/SkillStack';
import Work from './Sections/Work';

const PortFolio = () => {
  const [activeTab, setActiveTab] = useState('resume');
  const [showMainContent, setShowMainContent] = useState(true);
  const location = useLocation(); // 현재 위치를 가져옴

  useEffect(() => {
    // 라우트 변경시 메인 컨텐츠를 보여주도록 설정
    setShowMainContent(true);
    setActiveTab('resume');
  }, [location]); // 위치가 변경될 때마다 실행

  const handleTabClick = (tab) => {
      setActiveTab(tab);
      setShowMainContent(true);
  };

  const handleLinkClick = (tab) => {
      setActiveTab(tab);
      setShowMainContent(false);
      if (tab === 'harbor') {
        window.location.href = 'https://e584-118-32-146-229.ngrok-free.app/harbor/sign-in?redirect_url=%2Fharbor%2Fprojects';
      }
      if (tab === 'minio') {
        window.location.href = 'https://e7d8051a6ba90b5a4b7dc653a46b50d3.serveo.net/login';
      }
      if (tab === 'jenkins') {
        window.location.href = 'https://04985892c8d24a2f8a61da3471587f0c.serveo.net';
      }
  };


    return (
        <div>
            <div className="fixed top-14 left-0 mb-5 bottom-8 bg-gray-900 text-white w-54 overflow-y-auto">
                <PortfolioBar onLinkClick={handleLinkClick} />
            </div>

            {showMainContent ? (
                <div className="container mx-auto px-4 pl-56">
                    <div className="flex border-b">

                       <button
                            className={`py-2 px-4 text-sm rounded-lg ${activeTab === 'resume' ? 'bg-gray-500 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-700 hover:text-white'}`}
                            onClick={() => handleTabClick('resume')}>
                            이력서
                        </button>
                        <button
                            className={`py-2 px-4 text-sm rounded-lg ${activeTab === 'progress' ? 'bg-sky-500 text-white' : 'bg-sky-300 text-gray-800 hover:bg-sky-700 hover:text-white'}`}
                            onClick={() => handleTabClick('progress')}>
                            개발진행 
                        </button>
                        <button
                            className={`py-2 px-4 text-sm rounded-lg ${activeTab === 'about' ? 'bg-yellow-500 text-white' : 'bg-yellow-300 text-gray-800 hover:bg-yellow-700 hover:text-white'}`}
                            onClick={() => handleTabClick('about')}>
                            자기소개서
                        </button>
                        <button
                            className={`py-2 px-4 text-sm rounded-lg ${activeTab === 'activity' ? 'bg-blue-500 text-white' : 'bg-blue-300 text-gray-800 hover:bg-blue-700 hover:text-white'}`}
                            onClick={() => handleTabClick('activity')}>
                            활동내역
                        </button>
                        <button
                            className={`py-2 px-4 text-sm rounded-lg ${activeTab === 'certificate' ? 'bg-green-500 text-white' : 'bg-green-300 text-gray-800 hover:bg-green-700 hover:text-white'}`}
                            onClick={() => handleTabClick('certificate')}>
                            자격증
                        </button>
                        <button
                            className={`py-2 px-4 text-sm rounded-lg ${activeTab === 'skill' ? 'bg-purple-500 text-white' : 'bg-purple-300 text-gray-800 hover:bg-purple-700 hover:text-white'}`}
                            onClick={() => handleTabClick('skill')}>
                            기술
                        </button>
                        <button
                            className={`py-2 px-4 text-sm rounded-lg ${activeTab === 'work' ? 'bg-red-500 text-white' : 'bg-red-300 text-gray-800 hover:bg-red-700 hover:text-white'}`}
                            onClick={() => handleTabClick('work')}>
                            업무 및 경력사항
                        </button>
                    </div>
                    <div>
                        {activeTab === 'skill' && <Skill />}
                        {activeTab === 'about' && <About />}
                        {activeTab === 'activity' && <Activity />}
                        {activeTab === 'certificate' && <Certificate />}
                        {activeTab === 'work' && <Work />}
                        {activeTab === 'progress' && <Progress />}
                        {activeTab === 'resume' && <Resume />}
                        {activeTab === 'architecture' && <AllsimpleArchitecture />}
                    </div>
                </div>
                            ) : (
                              // 외부 컨텐츠 로딩 시
                              <div className="container mx-auto px-4 pl-56">
                  
                              {/* 해당 탭에 맞는 컴포넌트를 렌더링 */}
                              {activeTab === 'architecture' && <AllsimpleArchitecture />}
                              {activeTab === 'api' && <    AllsimpleAPI />}                
                              {activeTab === 'front' && <    AllsimpleFront />}                 
                              {activeTab === 'database' && <    AllsimpleDatabase />}
                              {activeTab === 'cert' && <    AllsimpleCert />}
                              {activeTab === 'blog' && <    AllsimpleBlog />}
                              

                              {/* 다른 탭에 대한 처리 필요 */}
                          </div>
          
                          )}
    
        </div>
    );
};

export default PortFolio;
