import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./table.css";

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "royalblue",
      color: theme.palette.common.white,
      padding: "1%",
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(State, CompanyName, ContactPersonName, ContactNumber, City) {
    return { State, CompanyName, ContactPersonName, ContactNumber, City };
  }
  
  const rows = [
    createData("Orissa", 
    "xyz", 
    "xyz",
    "xyz",
    "xyz"),
    createData("Orissa", 
    "xyz", 
    "xyz",
    "xyz",
    "xyz"),
    createData("Orissa", 
    "xyz", 
    "xyz",
    "xyz",
    "xyz"),
    createData("Orissa", 
    "xyz", 
    "xyz",
    "xyz",
    "xyz"),
  ];
  
  export default function CustomizedTables() {
    return (
      <TableContainer className="table" component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>State</StyledTableCell>
              <StyledTableCell align="center">CompanyName</StyledTableCell>
              <StyledTableCell align="center">ContactPersonName</StyledTableCell>
              <StyledTableCell align="center">ContactNumber</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>{row.State}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.CompanyName}
                </StyledTableCell>
                <StyledTableCell align="center">{row.ContactPersonName}</StyledTableCell>
                <StyledTableCell align="center">{row.ContactNumber}</StyledTableCell>
                <StyledTableCell align="center">{row.City}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }