import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name,company) {
  return { id, date, name,company };
}

const rows = [
  createData(
    0,
    '16 Sept, 2023',
    'Elvis Presley',
    'Microsoft'
  ),
  createData(
    1,
    '16 Aug, 2023',
    'Paul McCartney',
    'Capgemini'
  
  ),
  createData(2, '16 Aug, 2023', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Jan, 2024',
    'Michael Jackson',
    'HCL Technologies'
    
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Atos-Syntel'
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recently Placed</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.company}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more 
      </Link>
    </React.Fragment>
  );
}
