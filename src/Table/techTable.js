import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TagSelector from "../Tags/tagSelector";

export default function TechTable(props) {

    let technology = props.technology || [];

    return (
        <TableContainer component={Paper} elevation={3} sx={{height: "100%"}}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell>Technology</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Tags</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {technology.map(row => (
                        <TableRow key={row.name}>
                            <TableCell>{row.category}</TableCell>
                            <TableCell><a href={row.url} target="_blank" rel="noreferrer">{row.name}</a></TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell><TagSelector size={"small"} width={200} color defaultValue={row.tags} readOnly/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

}