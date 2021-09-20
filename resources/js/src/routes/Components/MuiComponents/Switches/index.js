import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import BasicSwitches from './demos/BasicSwitches';
import SwitchLabels from './demos/SwitchLabels';
import SwitchesGroup from './demos/SwitchesGroup';
import CustomizedSwitches from './demos/CustomizedSwitches';
import SwitchesSize from './demos/SwitchesSize';
import FormControlLabelPosition from './demos/FormControlLabelPosition';
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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/switches', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Basic switches',
    link: 'basic-switches',
    component: <BasicSwitches />,
    filename: './BasicSwitches.txt',
  },
  {
    label: 'Switch with FormControlLabel',
    link: 'switch-with-form-control-label',
    component: <SwitchLabels />,
    filename: './SwitchLabels.txt',
  },
  {
    label: 'Switches with FormGroup',
    link: 'switches-with-form-group',
    component: <SwitchesGroup />,
    filename: './SwitchesGroup.txt',
  },
  {
    label: 'Customized switches',
    link: 'customized-switches',
    component: <CustomizedSwitches />,
    filename: './CustomizedSwitches.txt',
  },
  {
    label: 'Sizes',
    link: 'sizes',
    component: <SwitchesSize />,
    filename: './SwitchesSize.txt',
  },
  {
    label: 'Label placement',
    link: 'label-placement',
    component: <FormControlLabelPosition />,
    filename: './FormControlLabelPosition.txt',
  },
];

export default function Switches() {
  const classes = useStyles();

  return (
    <MuiComponentDemo pageTitle="Switches" menus={demos}>
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
