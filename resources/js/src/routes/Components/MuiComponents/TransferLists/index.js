import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TransferList from './demos/TransferList';
import SelectAllTransferList from './demos/SelectAllTransferList';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';

const useStyles = makeStyles(theme => ({
  section: {
    '&:not(:last-child)': {
      marginBottom: theme.typography.pxToRem(32),
    },
  },
  sectionHeading: {
    marginBottom: theme.typography.pxToRem(16),
  },
}));

const requireRaw = require.context(
  '!raw-loader!../../../../@fake-db/mui-components/transfer-lists',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Simple Transfer List',
    link: 'simple-transfer-list',
    component: <TransferList />,
    filename: './SelectAllTransferList.txt',
  },
  {
    label: 'Enhanced Transfer List',
    link: 'enhanced-transfer-list',
    component: <SelectAllTransferList />,
    filename: './SelectAllTransferList.txt',
  },
];
export default function TransferLists() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Transfer List" menus={demos}>
      {demos.map((menu, index) => (
        <Box key={index} id={menu.link} className={classes.section}>
          <Typography component="h3" variant="inherit" className={classes.sectionHeading}>
            {menu.label}
          </Typography>
          <CodeViewerCard code={requireRaw(menu.filename).default} language="jsx">
            {menu.component}
          </CodeViewerCard>
        </Box>
      ))}
    </MuiComponentDemo>
  );
}
