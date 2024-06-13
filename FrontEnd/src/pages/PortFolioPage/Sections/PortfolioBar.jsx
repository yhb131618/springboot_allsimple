import React from 'react';

const PortfolioBar = ({ onLinkClick }) => {
    return (
        <ul className="list-none m-0 p-0">
            <div className='block p-3 text-2xl font-bold text-indigo-400 border-b border-t border-gray-300'>마스터 페이지</div>
            <li onClick={() => onLinkClick('blog')} className="block p-3 text-1xl hover:bg-gray-700 border-b border-gray-300">기술 Blog</li>
          
            <li onClick={() => onLinkClick('cert')} className="block p-3 hover:bg-gray-700 border-b border-gray-300">자격증 증서</li>
            <li onClick={() => onLinkClick('architecture')} className="block p-3 hover:bg-gray-700 border-b border-gray-300">Allsimple_아키텍처</li>
            <li onClick={() => onLinkClick('database')} className="block p-3 hover:bg-gray-700 border-b border-gray-300">Allsimple_데이터베이스</li>
            <li onClick={() => onLinkClick('api')} className="block p-3 hover:bg-gray-700 border-b border-gray-300">Allsimple_API 명세서</li>
            <li onClick={() => onLinkClick('front')} className="block p-3 hover:bg-gray-700 border-b border-gray-300">Allsimple_화면설계서</li>
            {/* <li onClick={() => onLinkClick('minio')} className="block p-3 hover:bg-gray-700 border-b border-gray-300">Private_Minio</li>
            <li onClick={() => onLinkClick('harbor')} className="block p-3 hover:bg-gray-700 border-b border-gray-300">Private_Harbor</li>
            <li onClick={() => onLinkClick('jenkins')} className="block p-3 hover:bg-gray-700 border-b border-gray-300">Private_Jenkins</li> */}
        </ul>
    );
}

export default PortfolioBar;
