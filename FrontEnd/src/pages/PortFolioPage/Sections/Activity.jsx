import BookIcon from '@mui/icons-material/Book';
import ComputerIcon from '@mui/icons-material/Computer';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Typography from '@mui/material/Typography';
import React from 'react';
function Activity() {
  return (

    <div  className="p-6 rounded shadow-lg ">
    <h2 className="text-2xl font-semibold">활동 내역</h2>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>05.03.02~08.02.24</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>부개고등학교 졸업</Typography>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>09.03.03~11.03.04</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>유원대학교(컴퓨터공학) 중퇴</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>14.11.21~17.02.22</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>학점은행제(경영학) 졸업</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>12.05.21~15.05.20</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error">
              <MilitaryTechIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>육군/하사/포병</Typography>
          </TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>15.05.20~19.10.18</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <BookIcon  />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>장르문학 작가 활동 (20권 집필)</Typography>
          </TimelineContent>
        </TimelineItem>

                <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>19.10.18~20.04.01</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>ICT 네트워크 보안관리자 양성 수료</Typography>
          </TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>20.04.01~20.10.31</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>이테크시스템(SE, 7개월 재직)</Typography>
          </TimelineContent>
        </TimelineItem>



        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>20.11.16~21.05.31</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>글로벌텔레콤(NE, 7개월 재직)</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>21.06.01~22.01.02</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <ComputerIcon/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>정보처리기사 취득 및 취업활동</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>22.01.03~23.06.16</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>코드클릭(DevOps, 1년 6개월 퇴사)</Typography>
          </TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary" sx={{ fontWeight: 'bold' }}>23.08.01~23.08.31</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>효성ITX(삼성닷컴 인바운드, 1개월 계약직)</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary" sx={{ fontWeight: 'bold' }}>23.10.13~24.04.01</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>비트캠프 (네이버 클라우드 웹 개발자 교육)</Typography>
          </TimelineContent>
        </TimelineItem>


      </Timeline>
    </div>

  );
}

export default Activity;
