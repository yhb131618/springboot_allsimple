import React from 'react';

function AllsimpleDatabase() {
  return (
    <div className="rounded shadow-lg ">

        <h2 className="text-2xl font-semibold">Allsimple 데이터베이스 설계</h2>
        <div className="text-2xl font-semibold mt-1"></div>
        <iframe 
          src="https://docs.google.com/spreadsheets/d/1trAsg83WmRgXWDfahb16iqZozhSLvCam6Q1fEg00a5c/edit#gid=0"
          frameBorder="0"
          width="100%"
          height="540px" // Example height, adjust as needed
          allowFullScreen
          title="Allsimple Architecture Presentation"
        ></iframe>

    </div>
  );
}

export default AllsimpleDatabase;
