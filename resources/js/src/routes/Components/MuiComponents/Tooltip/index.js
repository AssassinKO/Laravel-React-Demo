import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleTooltips from './demo/SimpleTooltips';
import PositionedTooltips from './demo/PositionedTooltips';
import CustomizedTooltips from './demo/CustomizedTooltips';
import ArrowTooltips from './demo/ArrowTooltips';
import TriggersTooltips from './demo/TriggersTooltips';
import ControlledTooltips from './demo/ControlledTooltips';
import VariableWidth from './demo/VariableWidth';
import InteractiveTooltips from './demo/InteractiveTooltips';
import DisabledTooltips from './demo/DisabledTooltips';
import TransitionsTooltips from './demo/TransitionsTooltips';
import DelayTooltips from './demo/DelayTooltips';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/tooltip', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Tooltips',
    link: 'simple-tooltips',
    component: <SimpleTooltips />,
    filename: './SimpleTooltips.txt',
  },
  {
    label: 'Positioned Tooltips',
    link: 'positioned-tooltips',
    component: <PositionedTooltips />,
    filename: './PositionedTooltips.txt',
  },
  {
    label: 'Customized Tooltips',
    link: 'customized-tooltips',
    component: <CustomizedTooltips />,
    filename: './CustomizedTooltips.txt',
  },
  {
    label: 'Arrow Tooltips',
    link: 'arrow-tooltips',
    component: <ArrowTooltips />,
    filename: './ArrowTooltips.txt',
  },
  {
    label: 'Triggers',
    link: 'triggers',
    component: <TriggersTooltips />,
    filename: './TriggersTooltips.txt',
  },
  {
    label: 'Controlled Tooltips',
    link: 'controlled-tooltips',
    component: <ControlledTooltips />,
    filename: './ControlledTooltips.txt',
  },
  {
    label: 'Variable Width',
    link: 'variable-width',
    component: <VariableWidth />,
    filename: './VariableWidth.txt',
  },
  {
    label: 'Interactive',
    link: 'interactive',
    component: <InteractiveTooltips />,
    filename: './InteractiveTooltips.txt',
  },
  {
    label: 'Disabled Elements',
    link: 'disabled-elements',
    component: <DisabledTooltips />,
    filename: './DisabledTooltips.txt',
  },
  {
    label: 'Transitions',
    link: 'transitions',
    component: <TransitionsTooltips />,
    filename: './TransitionsTooltips.txt',
  },
  {
    label: 'Showing and hiding',
    link: 'showing-and-hiding',
    component: <DelayTooltips />,
    filename: './DelayTooltips.txt',
  },
];

export default function Tooltip() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Tooltip" menus={demos}>
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
