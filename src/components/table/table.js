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

function createData(State, DistributorName, Address, Email, Telephone) {
  return { State, DistributorName, Address, Email, Telephone };
}

const rows = [
  createData("Orissa", 
  "OM SAI MEDICAL AGENCIES", 
  "PLOT NO: 139DEULA SAHITULASIPUR,CUTTACK,753008",
  "omsai.agencies2009@gmail.com",
  "9861090930"),
  createData("Orissa", 
  "CHANDUKA AGENCIES", 
  "MANIK GHOSE BAZARTALA TELENGA BAZARPURIGHAT,CUTTACK,753009",
  "rchanduka@gmail.com",
  "06712308681"),
  createData("Orissa", 
  "ADELINE PHARMA PVT LTD APOLLO",
  "ASHOK NAGARUNIT 2CAPITALBHUBANESWAR BHUBANESWAR 751009",
  " ",
  "0674-2951213"),
  createData("Orissa", 
  "BANSAL ENTERPRISERS",
  "OPP:UNION BANKMARWARIPARAJHARSUGUDA.,JHARSUGUDA,768201", 
  "mkbansal1999@gmail.com", 
  "06645-271023"),
];

export default function CustomizedTables() {
  return (
    <TableContainer className="table" component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>State</StyledTableCell>
            <StyledTableCell align="center">DistributorName</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Telephone</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{row.State}</StyledTableCell>
              <StyledTableCell align="center">
                {row.DistributorName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Address}</StyledTableCell>
              <StyledTableCell align="center">{row.Email}</StyledTableCell>
              <StyledTableCell align="center">{row.Telephone}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
