import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '../../node_modules/@mui/material/Table'
import TableBody from '../../node_modules/@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '../../node_modules/@mui/material/Paper'
import '../App.css'
import { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id,sourceAirport,destinationAirport,startDate,endDate) {
  return {id,sourceAirport,destinationAirport,startDate,endDate}
}


export default function PathTable() {
  
  
  const [pathData,setPathData]=useState([])

  const navigate=useNavigate() 

  useEffect(()=>{
    getPathData()
  },[])

  const getPathData=()=>{
    axios.get("http://localhost:5000/api/get-times")
    .then(({data})=>{
      console.log(data.data)
      setPathData(data.data)
    })
  }
  const rows=pathData.map((item)=>{
     return createData(item.id,item.sourceAirport,item.destinationAirport,item.startDate,item.endDate)
  });

  const goToSim=()=>{
    navigate("/sim")
  }



    return (
        <>
        <h1 align="center">Flights Generated</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Flight ID</StyledTableCell>
            <StyledTableCell>Source Airport</StyledTableCell>
            <StyledTableCell>Destination Airport</StyledTableCell>
            <StyledTableCell>Departure Time</StyledTableCell>
            <StyledTableCell>Arrival Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          rows.map((row,idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell>{idx}</StyledTableCell>
              <StyledTableCell>{row.sourceAirport}</StyledTableCell>
              <StyledTableCell>{row.destinationAirport}</StyledTableCell>
              <StyledTableCell>{row.startDate}</StyledTableCell>
              <StyledTableCell>{row.endDate}</StyledTableCell>
            </StyledTableRow>
          ))
        }
        </TableBody>
      </Table>
    </TableContainer>
    <button className='btn btn-primary' onClick={goToSim}>Go to Sim</button>
    </>
    
  );
}
