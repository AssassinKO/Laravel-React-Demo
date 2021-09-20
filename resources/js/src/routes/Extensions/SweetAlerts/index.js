import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../@jumbo/components/Common/CodeViewerCard';
import BasicAlerts from './demo/BasicAlerts';
import ToastAlerts from './demo/ToastAlerts';
import AlertsType from './demo/AlertsType';
import TitleWithText from './demo/TitleWithText';
import SuccessAlert from './demo/SuccessAlert';
import ErrorAlert from './demo/ErrorAlert';
import ImageWithMessage from './demo/ImageWithMessage';
import CustomHtmlMessage from './demo/CustomHtmlMessage';
import CustomPosition from './demo/CustomPosition';
import AutoCloseAlert from './demo/AutoCloseAlert';
import AdvancedAlert from './demo/AdvancedAlert';
import ComponentsDemo from '../../../@jumbo/components/PageComponents/layouts/ComponentsDemo';

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

const requireRaw = require.context('!raw-loader!../../../@fake-db/extensions/sweet-alert', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Basic',
    link: 'basic',
    component: <BasicAlerts />,
    filename: './BasicAlerts.txt',
  },
  {
    label: 'Title with text',
    link: 'title-with-text',
    component: <TitleWithText />,
    filename: './TitleWithText.txt',
  },
  {
    label: 'Show success message',
    link: 'show-success-message',
    component: <SuccessAlert />,
    filename: './SuccessAlert.txt',
  },
  {
    label: 'Show error message and footer',
    link: 'show-error-message-and-footer',
    component: <ErrorAlert />,
    filename: './ErrorAlert.txt',
  },
  {
    label: 'Image with message',
    link: 'image-with-message',
    component: <ImageWithMessage />,
    filename: './ImageWithMessage.txt',
  },
  {
    label: 'Custom HTML message',
    link: 'custom-html-message',
    component: <CustomHtmlMessage />,
    filename: './CustomHtmlMessage.txt',
  },
  {
    label: 'Custom Position',
    link: 'custom-position',
    component: <CustomPosition />,
    filename: './CustomPosition.txt',
  },
  {
    label: 'Auto close timer',
    link: 'auto-close-timer',
    component: <AutoCloseAlert />,
    filename: './AutoCloseAlert.txt',
  },
  {
    label: 'Advanced Alert',
    link: 'advanced-alert',
    component: <AdvancedAlert />,
    filename: './AdvancedAlert.txt',
  },
  {
    label: 'Toast Alerts',
    link: 'toast-alerts',
    component: <ToastAlerts />,
    filename: './ToastAlerts.txt',
  },
  {
    label: 'Alerts Type',
    link: 'alerts-type',
    component: <AlertsType />,
    filename: './AlertsType.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Extensions', link: '/extensions' },
  { label: 'SweetAlerts', isActive: true },
];

const SweetAlerts = () => {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="SweetAlerts" menus={demos} breadcrumbs={breadcrumbs}>
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

export default SweetAlerts;
