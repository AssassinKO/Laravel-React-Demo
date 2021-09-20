import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SimpleSelect from './demos/SimpleSelect';
import NativeSelects from './demos/NativeSelects';
import CustomizedSelects from './demos/CustomizedSelects';
import MultipleSelect from './demos/MultipleSelect';
import ControlledOpenSelect from './demos/ControlledOpenSelect';
import DialogSelect from './demos/DialogSelect';
import GroupedSelect from './demos/GroupedSelect';
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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/selects', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Select',
    link: 'simple-select',
    component: <SimpleSelect />,
    filename: './SimpleSelect.txt',
  },
  {
    label: 'Native Select',
    link: 'native-select',
    component: <NativeSelects />,
    filename: './NativeSelects.txt',
  },
  {
    label: 'Customized selects',
    link: 'customized-selects',
    component: <CustomizedSelects />,
    filename: './CustomizedSelects.txt',
  },
  {
    label: 'Multiple Select',
    link: 'multiple-select',
    component: <MultipleSelect />,
    filename: './MultipleSelect.txt',
  },
  {
    label: 'Controlled Open Select',
    link: 'controlled-open-select',
    component: <ControlledOpenSelect />,
    filename: './ControlledOpenSelect.txt',
  },
  {
    label: 'With a Dialog',
    link: 'with-a-dialog',
    component: <DialogSelect />,
    filename: './DialogSelect.txt',
  },
  {
    label: 'Grouping',
    link: 'grouping',
    component: <GroupedSelect />,
    filename: './GroupedSelect.txt',
  },
];
export default function Selects() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Select" menus={demos}>
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
