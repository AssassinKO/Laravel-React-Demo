import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CodeViewerCard } from '../../../../@jumbo/components/Common';
import BasicDatePicker from './demo/BasicDatePicker';
import KeyboardDatePickerExample from './demo/KeyboardDatePickerExample';
import YearMonthPicker from './demo/YearMonthPicker';
import InlineDatePickerDemo from './demo/InlineDatePickerDemo';
import StaticDatePicker from './demo/StaticDatePicker';
import CustomizationDatePickers from './demo/CustomizationDatePickers';
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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/extensions/pickers/date', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Basic',
    link: 'basic',
    component: <BasicDatePicker />,
    filename: './BasicDatePicker.txt',
  },
  {
    label: 'Keyboard Input',
    link: 'keyboard-input',
    component: <KeyboardDatePickerExample />,
    filename: './KeyboardDatePickerExample.txt',
  },
  {
    label: 'Different Views',
    link: 'different-views',
    component: <YearMonthPicker />,
    filename: './YearMonthPicker.txt',
  },
  {
    label: 'Inline Mode',
    link: 'inline-mode',
    component: <InlineDatePickerDemo />,
    filename: './InlineDatePickerDemo.txt',
  },
  {
    label: 'Static Mode',
    link: 'static-mode',
    component: <StaticDatePicker />,
    filename: './StaticDatePicker.txt',
  },
  {
    label: 'Customization',
    link: 'customization',
    component: <CustomizationDatePickers />,
    filename: './CustomizationDatePickers.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Extensions', link: '/extensions' },
  { label: 'Pickers', link: '/extensions/pickers' },
  { label: 'Date Pickers', isActive: true },
];

const DatePickers = () => {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="Date Pickers" menus={demos} breadcrumbs={breadcrumbs}>
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
  );
};

export default DatePickers;
