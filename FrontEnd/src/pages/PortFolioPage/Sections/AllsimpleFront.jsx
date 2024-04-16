import React from 'react';

function AllsimpleFront() {
  return (
    <div className="rounded shadow-lg ">

        <h2 className="text-2xl font-semibold">Allsimple 화면정의서</h2>
        <div className="text-2xl font-semibold mt-1"></div>
        <iframe 
          src="https://docs.google.com/spreadsheets/d/1_qlQcWvNJJ74QixACu-Mfi6vIaz5Yv8r_GVcFZpSapQ/edit#gid=0/pub?start=false&loop=false&delayms=3000"
          frameBorder="0"
          width="100%"
          height="540px" // Example height, adjust as needed
          allowFullScreen
          title="Allsimple Architecture Presentation"
        ></iframe>

    </div>
  );
}

export default AllsimpleFront;
