import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CodeViewerCard } from '../../../../@jumbo/components/Common';
import BasicDateTimePicker from './demo/BasicDateTimePicker';
import InlineDateTimePickerDemo from './demo/InlineDateTimePickerDemo';
import CustomDateTimePicker from './demo/CustomDateTimePicker';
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

const requireRaw = require.context(
  '!raw-loader!../../../../@fake-db/extensions/pickers/date-time',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Basic',
    link: 'basic',
    component: <BasicDateTimePicker />,
    filename: './BasicDateTimePicker.txt',
  },
  {
    label: 'Inline Mode',
    link: 'inline-mode',
    component: <InlineDateTimePickerDemo />,
    filename: './InlineDateTimePickerDemo.txt',
  },
  {
    label: 'Customization',
    link: 'customization',
    component: <CustomDateTimePicker />,
    filename: './CustomDateTimePicker.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Extensions', link: '/extensions' },
  { label: 'Pickers', link: '/extensions/pickers' },
  { label: 'Date Time Pickers', isActive: true },
];

const DateTimePickers = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ComponentsDemo pageTitle="Date Time Pickers" menus={demos} breadcrumbs={breadcrumbs}>
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

export default DateTimePickers;
