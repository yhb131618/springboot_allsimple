import React, { useState } from 'react';

// 프로젝트 데이터 배열
const projects = [
  { id: 1, name: 'Infra KT 대구, 광주 지사 5G 코어망 구축', company: '이테크시스템' ,imagePath: '/images/project1.jpg'},
  { id: 2, name: 'Infra KT 구로, 혜화 지사 LTE망 유지보수', company: '이테크시스템' ,imagePath: '/images/project1.jpg' },
  { id: 3, name: 'Infra Cisco 무선 코어망 검증 테스트', company: '이테크시스템' ,imagePath: '/images/project1.jpg' },
  { id: 4, name: 'Network 일산백병원 L2/L3 유지보수', company: '글로벌텔레콤' ,imagePath: '/images/project1.jpg' },
  { id: 5, name: 'Network KBS L2/L3 유지보수', company: '글로벌텔레콤'  ,imagePath: '/images/project1.jpg'},
  { id: 6, name: 'Network 국도화학 L2/L3 유지보수', company: '글로벌텔레콤' ,imagePath: '/images/project1.jpg' },
  { id: 7, name: 'Network 흥국생명 L2 구축', company: '글로벌텔레콤' ,imagePath: '/images/project1.jpg' },
  { id: 8, name: 'Network 엘림넷 L2/L3 구축', company: '글로벌텔레콤' ,imagePath: '/images/project1.jpg' },
  { id: 9, name: 'Network NHN L4/L7 유지보수', company: '글로벌텔레콤' ,imagePath: '/images/project1.jpg' },
  { id: 10, name: 'Infra ARISTA cloud Network 엘림넷 구축', company: '글로벌텔레콤' ,iWmagePath: '/images/project1.jpg' },
  { id: 11, name: 'Infra AIQ 챗봇 인프라 기술이전', company: '코드클릭' ,imagePath: '/images/project1.jpg' },
  { id: 12, name: 'Infra AIQ 롯데홈쇼핑 서버 배포 및 유지보수', company: '코드클릭' ,imagePath: '/images/project1.jpg' },
  { id: 13, name: 'AIQ 롯데이커머스 시나리오 학습 및 QA', company: '코드클릭' ,imagePath: '/images/project1.jpg' },
  { id: 14, name: 'AIQ 롯데월드 시나리오 학습 및 QA', company: '코드클릭'  ,imagePath: '/images/project1.jpg'},
  { id: 15, name: 'AIQ 롯데세네마 시나리오 학습 및 QA', company: '코드클릭' ,imagePath: '/images/project1.jpg' },
  { id: 16, name: 'Ops 한국로슈 Kdigital 웹서비스&챗봇 운영', company: '코드클릭' ,imagePath: '/images/project1.jpg' },
  { id: 17, name: 'Dev 큐브엔터 챗봇 개발', company: '코드클릭' ,imagePath: '/images/project1.jpg' },
  { id: 18, name: 'Dev 요기요 챗봇 개발 2차', company: '코드클릭'  ,imagePath: '/images/project1.jpg'},
  { id: 19, name: 'Dev 요기요 챗봇 개발 3차', company: '코드클릭'  ,imagePath: '/images/project1.jpg'},
  { id: 20, name: 'Dev Autoflow AICC 개발 및 연동 프로젝트 중 퇴사', company: '코드클릭' ,imagePath: '/images/project1.jpg' },
];

function  Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = project => {
    setSelectedProject(project);
  };

  return (
    <div className="flex flex-row  bg-white p-6 rounded shadow-lg">
      
      <div className="flex-1">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">프로젝트 및 업무 리스트</h1>
        <ul className="space-y-2 overflow-auto  h-[600px]">
          {projects.map(project => (
            <li key={project.id}
                onClick={() => handleProjectClick(project)}
                className="cursor-pointer border-2 border-gray-600 p-3 hover:bg-gray-100 rounded-md transition-colors">
              [{project.company}] {project.name} 
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 ml-4 border-l border-gray-600 pl-4">
        {selectedProject ? (
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{selectedProject.name}</h2>
            <p className="text-gray-600">수행 회사: {selectedProject.company}</p>
            {/* 추가적인 상세 설명을 여기에 표시합니다. */}
            <div className="mt-4">
              <img src={selectedProject.imagePath} alt="Project Visual" className="max-w-full h-auto rounded-lg"/>
              {/* 이미지 경로를 실제 경로로 변경하세요. */}
            </div>
          </div>
        ) : (
          <p className="text-gray-500">프로젝트를 선택하세요.</p>
        )}
      </div>
    </div>
  );
}

export default Work;
