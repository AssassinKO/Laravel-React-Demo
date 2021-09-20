import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CodeViewerCard } from '../../../../@jumbo/components/Common';
import BasicTimePicker from './demo/BasicTimePicker';
import KeyboardTimePickerExample from './demo/KeyboardTimePickerExample';
import InlineTimePickerDemo from './demo/InlineTimePickerDemo';
import StaticTimePicker from './demo/StaticTimePicker';
import SecondsTimePicker from './demo/SecondsTimePicker';
import ComponentsDemo from '../../../../@jumbo/components/PageComponents/layouts/ComponentsDemo';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/extensions/pickers/time', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Basic',
    link: 'basic',
    component: <BasicTimePicker />,
    filename: './BasicTimePicker.txt',
  },
  {
    label: 'Keyboard Input',
    link: 'keyboard-input',
    component: <KeyboardTimePickerExample />,
    filename: './KeyboardTimePickerExample.txt',
  },
  {
    label: 'Inline Mode',
    link: 'inline-mode',
    component: <InlineTimePickerDemo />,
    filename: './InlineTimePickerDemo.txt',
  },
  {
    label: 'Static Mode',
    link: 'static-mode',
    component: <StaticTimePicker />,
    filename: './StaticTimePicker.txt',
  },
  {
    label: 'Seconds',
    link: 'seconds',
    component: <SecondsTimePicker />,
    filename: './SecondsTimePicker.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Extensions', link: '/extensions' },
  { label: 'Pickers', link: '/extensions/pickers' },
  { label: 'Time Pickers', isActive: true },
];

const TimePickers = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ComponentsDemo pageTitle="Time Pickers" menus={demos} breadcrumbs={breadcrumbs}>
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
      </ComponentsDemo>
    </React.Fragment>
  );
};

export default TimePickers;
