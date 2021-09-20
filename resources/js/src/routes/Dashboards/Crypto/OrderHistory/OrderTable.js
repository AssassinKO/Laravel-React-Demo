import React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import TableHeading from './TableHeading';
import TableItem from './TableItem';

const OrderTable = ({ tableData }) => {
  return (
    <div className="Cmt-table-responsive">
      <Table>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableItem row={row} key={index} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderTable;
