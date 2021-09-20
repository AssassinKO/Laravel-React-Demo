import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import CircularIndeterminate from './demo/CircularIndeterminate';
import CircularStatic from './demo/CircularStatic';
import CircularIntegration from './demo/CircularIntegration';
import CircularWithValueLabel from './demo/CircularWithValueLabel';
import LinearIndeterminate from './demo/LinearIndeterminate';
import LinearDeterminate from './demo/LinearDeterminate';
import LinearBuffer from './demo/LinearBuffer';
import LinearWithValueLabel from './demo/LinearWithValueLabel';
import CustomizedProgressBars from './demo/CustomizedProgressBars';
import DelayingAppearance from './demo/DelayingAppearance';
import CircularUnderLoad from './demo/CircularUnderLoad';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/progress', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Circular indeterminate',
    link: 'circular-indeterminate',
    component: <CircularIndeterminate />,
    filename: './CircularIndeterminate.txt',
  },
  {
    label: 'Circular determinate',
    link: 'circular-determinate',
    component: <CircularStatic />,
    filename: './CircularStatic.txt',
  },
  {
    label: 'Interactive integration',
    link: 'interactive-integration',
    component: <CircularIntegration />,
    filename: './CircularIntegration.txt',
  },
  {
    label: 'Circular with label',
    link: 'circular-with-label',
    component: <CircularWithValueLabel />,
    filename: './CircularWithValueLabel.txt',
  },
  {
    label: 'Linear indeterminate',
    link: 'linear-indeterminate',
    component: <LinearIndeterminate />,
    filename: './LinearIndeterminate.txt',
  },
  {
    label: 'Linear determinate',
    link: 'linear-determinate',
    component: <LinearDeterminate />,
    filename: './LinearDeterminate.txt',
  },
  {
    label: 'Linear buffer',
    link: 'linear-buffer',
    component: <LinearBuffer />,
    filename: './LinearBuffer.txt',
  },
  {
    label: 'Linear with label',
    link: 'linear-with-label',
    component: <LinearWithValueLabel />,
    filename: './LinearWithValueLabel.txt',
  },
  {
    label: 'Customized progress',
    link: 'customized-progress',
    component: <CustomizedProgressBars />,
    filename: './CustomizedProgressBars.txt',
  },
  {
    label: 'Delaying appearance',
    link: 'delaying-appearance',
    component: <DelayingAppearance />,
    filename: './DelayingAppearance.txt',
  },
  {
    label: 'Limitations',
    link: 'limitations',
    component: <CircularUnderLoad />,
    filename: './CircularUnderLoad.txt',
  },
];

export default function Progress() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Progress" menus={demos}>
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
