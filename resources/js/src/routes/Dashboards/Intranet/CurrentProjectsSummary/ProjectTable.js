import React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import TableHeading from './TableHeading';
import TableItem from './TableItem';

const ProjectTable = ({ data }) => {
  return (
    <div className="Cmt-table-responsive">
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
    </div>
  );
};

export default ProjectTable;
