import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'; // Add this import

function createData(name, institute, year, grade) {
  return { name, institute, year, grade };
}

const rows = [
  createData('ICS', "Punjab Group Of Colleges", 2022, "A+"),
  createData('BSCS', "Information Technology University Lahore", 2026, "A+"),
];

export default function BasicTable() {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <TableContainer component={Paper} sx={{ width: '80%' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Qualification</strong></TableCell>
              <TableCell align="right"><strong>School / College</strong></TableCell>
              <TableCell align="right"><strong>Year Of Passing</strong></TableCell>
              <TableCell align="right"><strong>Grade</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.institute}</TableCell>
                <TableCell align="right">{row.year}</TableCell>
                <TableCell align="right">{row.grade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
