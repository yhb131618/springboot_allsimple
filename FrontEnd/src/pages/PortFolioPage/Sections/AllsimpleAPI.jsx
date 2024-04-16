import React from 'react';

function AllsimpleAPI() {
  return (
    <div className="rounded shadow-lg ">

        <h2 className="text-2xl font-semibold">Allsimple 기능명세서</h2>
        <div className="text-2xl font-semibold mt-1"></div>
        <iframe 
          src="https://docs.google.com/spreadsheets/d/1fMPh6gnznmxQUm6mm5F7caVlePcVbeKTygX1d_R0CIk/edit#gid=0https://docs.google.com/spreadsheets/d/1trAsg83WmRgXWDfahb"
          frameBorder="0"
          width="100%"
          height="540px" // Example height, adjust as needed
          allowFullScreen
          title="Allsimple Architecture Presentation"
        ></iframe>

    </div>
  );
}

export default  AllsimpleAPI;
