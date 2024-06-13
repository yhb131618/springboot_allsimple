import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { default as React } from 'react';
import ProgressUnit from './ProgressUnit';


const comments = [
  {

  },

];


function Progress() {



  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#a4c3e6' : '#ffffff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="p-6 rounded shadow-lg">
      <h2 className="text-2xl  font-semibold">진행사항</h2>
        <div className="p-2"></div>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} >

        <Box gridColumn="span 12" >
          <Item>차트
                


          </Item>
        </Box>

        <Box gridColumn="span 12" sx={{ height: 700}}>
          <Item sx={{
                    fontSize: 24,
                    color: 'white',
                    backgroundColor: 'error.main', // 배경색을 테마의 primary 색상으로 설정
                    }}
          >
          To Do List
          </Item>
                <div>
                  <ProgressUnit comments={comments} />
                </div>
          
        </Box>
        <Box gridColumn="span 12">
          <Item sx={{
                    fontSize: 24,
                    color: 'white',
                    backgroundColor: 'primary.main', // 배경색을 테마의 primary 색상으로 설정
                    }}

                    >등록</Item>
     
            </Box> 
            </Box> 

      <div> 

      </div>
    </div>
    
  );
}

export default Progress;
