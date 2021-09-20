import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import ToggleButtonsExclusive from './demo/ToggleButtonsExclusive';
import ToggleButtonsMultiple from './demo/ToggleButtonsMultiple';
import ToggleButtonSizes from './demo/ToggleButtonSizes';
import VerticalToggleButtons from './demo/VerticalToggleButtons';
import ToggleButtonNotEmpty from './demo/ToggleButtonNotEmpty';
import StandaloneToggleButton from './demo/StandaloneToggleButton';
import CustomizedDividers from './demo/CustomizedDividers';

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
  '!raw-loader!../../../../@fake-db/mui-components/toggle-buttons',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Exclusive selection',
    link: 'exclusive-selection',
    component: <ToggleButtonsExclusive />,
    filename: './ToggleButtonsExclusive.txt',
  },
  {
    label: 'Multiple selection',
    link: 'multiple-selection',
    component: <ToggleButtonsMultiple />,
    filename: './ToggleButtonsMultiple.txt',
  },
  {
    label: 'Sizes',
    link: 'sizes',
    component: <ToggleButtonSizes />,
    filename: './ToggleButtonSizes.txt',
  },
  {
    label: 'Vertical buttons',
    link: 'vertical-buttons',
    component: <VerticalToggleButtons />,
    filename: './VerticalToggleButtons.txt',
  },
  {
    label: 'Enforce value set',
    link: 'enforce-value-set',
    component: <ToggleButtonNotEmpty />,
    filename: './ToggleButtonNotEmpty.txt',
  },
  {
    label: 'Standalone toggle button',
    link: 'standalone-toggle-button',
    component: <StandaloneToggleButton />,
    filename: './StandaloneToggleButton.txt',
  },
  {
    label: 'Customized toggle button',
    link: 'customized-toggle-button',
    component: <CustomizedDividers />,
    filename: './CustomizedDividers.txt',
  },
];

export default function ToggleButtons() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Toggle Buttons" menus={demos}>
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
