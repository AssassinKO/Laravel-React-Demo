import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableHeading from './TableHeading';
import TableBody from '@material-ui/core/TableBody';
import TableItem from './TableItem';
import Box from '@material-ui/core/Box';

const ProjectTable = ({ data }) => {
  return (
    <Box className="Cmt-table-responsive">
      <Table>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableItem row={row} key={row.id} />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ProjectTable;
