import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleDialog from './demo/SimpleDialog';
import AlertDialog from './demo/AlertDialog';
import AlertDialogSlide from './demo/AlertDialogSlide';
import FormDialog from './demo/FormDialog';
import CustomizedDialogs from './demo/CustomizedDialogs';
import FullScreenDialog from './demo/FullScreenDialog';
import MaxWidthDialog from './demo/MaxWidthDialog';
import ResponsiveDialog from './demo/ResponsiveDialog';
import ConfirmationDialog from './demo/ConfirmationDialog';
import DraggableDialog from './demo/DraggableDialog';
import ScrollDialog from './demo/ScrollDialog';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/dialog', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple Dialogs',
    link: 'simple-dialogs',
    component: <SimpleDialog />,
    filename: './SimpleDialog.txt',
  },
  {
    label: 'Alerts',
    link: 'alerts',
    component: <AlertDialog />,
    filename: './AlertDialog.txt',
  },
  {
    label: 'Transitions',
    link: 'transitions',
    component: <AlertDialogSlide />,
    filename: './AlertDialogSlide.txt',
  },
  {
    label: 'Form dialogs',
    link: 'form-dialogs',
    component: <FormDialog />,
    filename: './FormDialog.txt',
  },
  {
    label: 'Customized dialogs',
    link: 'customized-dialogs',
    component: <CustomizedDialogs />,
    filename: './CustomizedDialogs.txt',
  },
  {
    label: 'Full-screen dialogs',
    link: 'full-screen-dialogs',
    component: <FullScreenDialog />,
    filename: './FullScreenDialog.txt',
  },
  {
    label: 'Optional sizes',
    link: 'optional-sizes',
    component: <MaxWidthDialog />,
    filename: './MaxWidthDialog.txt',
  },
  {
    label: 'Responsive full-screen',
    link: 'responsive-full-screen',
    component: <ResponsiveDialog />,
    filename: './ResponsiveDialog.txt',
  },
  {
    label: 'Confirmation dialogs',
    link: 'confirmation-dialogs',
    component: <ConfirmationDialog />,
    filename: './ConfirmationDialog.txt',
  },
  {
    label: 'Draggable dialog',
    link: 'draggable-dialog',
    component: <DraggableDialog />,
    filename: './DraggableDialog.txt',
  },
  {
    label: 'Scrolling long content',
    link: 'scrolling-long-content',
    component: <ScrollDialog />,
    filename: './ScrollDialog.txt',
  },
];

export default function Dialog() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Dialog" menus={demos}>
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
