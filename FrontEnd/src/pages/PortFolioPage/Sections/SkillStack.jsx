import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

const technologyData = {
  Infra: ["Kvm", "Docker", "Nginx", "OpenSSL", "KeepAlive","FTP","Shell","Centos7","Ubuntu 20.04"],
  CICD: ["Jenkins", "Harbor","Minio","Kubernetes","Ansible","Git","Calico"],
  BackEnd: ["Java", "SpringFrameWork", "SpringBoot", "Mysql 8.0"],
  FrontEnd: ["JavaScript", "React", "Vite", "Material UI","JSP","BootStrap","JSLT"],
  ETC: ["Python"]
};


function SkillStack() {
  const numColumns = Object.keys(technologyData).length;
  const columnWidth = `${100 / numColumns}%`; // 각 열의 너비를 퍼센트로 계산

  return (
    <div className="p-6 rounded shadow-lg">
          <h2 className="text-2xl font-semibold" >기술 스택</h2>
          - 현 프로젝트에 적용된 기술 
          <div className= "p-2"></div>
      <TableContainer component={Paper}>
        <Table aria-label="Skill Stack Table">
          <TableHead>
            <TableRow style={{ backgroundColor: '#e0e0e0'  }} sx={{ height: '1rem' }}>
              {Object.keys(technologyData).map((key, index) => (
                <TableCell key={key} style={{
                  width: columnWidth,
                  borderRight: index < Object.keys(technologyData).length - 1 ? '1px solid rgba(255, 255, 255, 1)' : '',
                  borderBottom: '2px solid rgba(224, 224, 224, 1)'
                }}>
                  <Typography variant="h6" component="div" style={{ fontSize: '1.25rem' }}>
                    {key.toUpperCase()}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: Math.max(...Object.values(technologyData).map(techs => techs.length)) }, (_, index) => (
              <TableRow key={index} sx={{ height: '1rem' }}>
                {Object.values(technologyData).map((techs, colIndex) => (
                  <TableCell key={colIndex} style={{
                    width: columnWidth,
                    fontSize: '1rem',
                    borderRight: colIndex < Object.values(technologyData).length - 1 ? '2px solid rgba(224, 224, 224, 1)' : '',
                    borderBottom: index < Math.max(...Object.values(technologyData).map(techs => techs.length)) - 1 ? '1px solid rgba(224, 224, 224, 1)' : ''
           
                 }}>
                    {techs[index] || ""}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SkillStack;
