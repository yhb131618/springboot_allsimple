import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { v4 as uuidv4 } from 'uuid';
function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.name} (시작: {todo.startDate} - 마감: {todo.endDate})
          </label>
        </li>
      ))}
    </ul>
  );
}

function ProgressChart({ todos }) {
  const completedTasks = todos.filter(todo => todo.complete).length;
  const data = {
    labels: ['완료', '미완료'],
    datasets: [{
      label: '할 일 진행 상황',
      data: [completedTasks, todos.length - completedTasks],
      backgroundColor: ['#4CAF50', '#FF6384']
    }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Bar data={data} options={options} />;
}

function Progress() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const addTodo = () => {
    if (name && startDate && endDate) {
      setTodos([...todos, { id: uuidv4(), name, startDate, endDate, complete: false }]);
      setName('');
      setStartDate('');
      setEndDate('');
    }
  };

  const toggleTodo = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    }));
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#a4c3e6' : '#ffffff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const columns = [

    {
      field: 'firstName',
      headerName: '업무',
      width: 80,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: '분류',
      width: 30,
      editable: true,
    },
    {
      field: 'age',
      headerName: '우선순위',
      type: 'number',
      width: 60,
      editable: true,
    },
    {
      field: 'todo',
      headerName: '해야 할 일',
      type: 'number',
      width: 250,
      editable: true,
    },
  ];
  
  
  const rows = [
    { id: 1, lastName: '대', firstName: '프론트엔드', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  
  return (
    <div className="p-6 rounded shadow-lg">
      <h2 className="text-2xl  font-semibold">진행사항</h2>
        <div className="p-2"></div>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} >

        <Box gridColumn="span 12" >
          <Item>차트
              


          </Item>
        </Box>

        <Box gridColumn="span 6" sx={{ height: 700}}>
          <Item sx={{
                    fontSize: 24,
                    color: 'white',
                    backgroundColor: 'error.main', // 배경색을 테마의 primary 색상으로 설정
                    }}
          >
          To Do List
          </Item>
          <Box sx={{ height: 650, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                sx={{
                  '& .MuiDataGrid-cell': {
                    fontSize: 11,
                  },
                  '& .MuiDataGrid-columnHeader': {
                    fontSize: 12,
                  }
                }}
              />
            </Box>

          
        </Box>
        <Box gridColumn="span 6">
          <Item sx={{
                    fontSize: 24,
                    color: 'white',
                    backgroundColor: 'primary.main', // 배경색을 테마의 primary 색상으로 설정
                    }}

                    >Record List</Item>

          <Box sx={{ height: 650, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                sx={{
                  '& .MuiDataGrid-cell': {
                    fontSize: 11,
                  },
                  '& .MuiDataGrid-columnHeader': {
                    fontSize: 12,
                  }
                }}
              />
            </Box>        

        </Box>
        <Box gridColumn="span 12">
          <Item>등록</Item>
        </Box>
      </Box>

    </div>
  );
}

export default Progress;
