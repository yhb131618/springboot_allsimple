import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Typography from '@mui/material/Typography';
import React from 'react';
function Certificate() {
  return (

    <div  className="p-6 rounded shadow-lg ">
          <h2 className="text-2xl font-semibold">자격증 취득</h2>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>2016.08.05</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>텔레마케팅관리사</Typography>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>2017.02.07</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>한국사능력검정</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>2016.12.23</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <ComputerIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>워드프로세서</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>2019.11.22</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography> 매경테스트 우수</Typography>
          </TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>2019.12.27</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <ComputerIcon  />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>네트워크관리사 2급</Typography>
          </TimelineContent>
        </TimelineItem>

                <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>2019.12.27</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <ComputerIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>컴퓨터활용능력 1급</Typography>
          </TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>2021.08.20</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error">
              <ComputerIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>정보처리기사</Typography>
          </TimelineContent>
        </TimelineItem>



        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>2024.02.22</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error">
              <ComputerIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>네이버 클라우드 플랫폼 NCP 취득</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"  sx={{ fontWeight: 'bold' }}>2024.03.01</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error">
              <ComputerIcon/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>네이버 클라우드 플랫폼 NCE 취득</Typography>
          </TimelineContent>
        </TimelineItem>

       
      </Timeline>
    </div>

  );
}

export default Certificate;
