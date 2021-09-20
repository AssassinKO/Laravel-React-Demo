import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleSnackbar from './demo/SimpleSnackbar';
import CustomizedSnackbars from './demo/CustomizedSnackbars';
import PositionedSnackbar from './demo/PositionedSnackbar';
import LongTextSnackbar from './demo/LongTextSnackbar';
import ConsecutiveSnackbars from './demo/ConsecutiveSnackbars';
import FabIntegrationSnackbar from './demo/FabIntegrationSnackbar';
import TransitionsSnackbar from './demo/TransitionsSnackbar';
import DirectionSnackbar from './demo/DirectionSnackbar';
import IframeWindow from '../../../../@jumbo/components/Common/IframeWindow';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/snackbar', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple snackbars',
    link: 'simple-snackbars',
    component: <SimpleSnackbar />,
    filename: './SimpleSnackbar.txt',
  },
  {
    label: 'Customized snackbars',
    link: 'customized-snackbars',
    component: <CustomizedSnackbars />,
    filename: './CustomizedSnackbars.txt',
  },
  {
    label: 'Positioned snackbars',
    link: 'positioned-snackbars',
    component: <PositionedSnackbar />,
    filename: './PositionedSnackbar.txt',
  },
  {
    label: 'Message Length',
    link: 'message-length',
    component: <LongTextSnackbar />,
    filename: './LongTextSnackbar.txt',
  },
  {
    label: 'Consecutive Snackbars',
    link: 'consecutive-snackbars',
    component: <ConsecutiveSnackbars />,
    filename: './ConsecutiveSnackbars.txt',
  },
  {
    label: 'Snackbars and floating action buttons (FABs)',
    link: 'snackbars-and-floating-action-buttons-fabs',
    component: <FabIntegrationSnackbar />,
    filename: './FabIntegrationSnackbar.txt',
    iframe: true,
  },
  {
    label: 'Change Transition',
    link: 'change-transition',
    component: <TransitionsSnackbar />,
    filename: './TransitionsSnackbar.txt',
  },
  {
    label: 'Control Slide direction',
    link: 'control-slide-direction',
    component: <DirectionSnackbar />,
    filename: './DirectionSnackbar.txt',
  },
  {
    label: 'notistack',
    link: 'notistack',
    component: <DirectionSnackbar />,
    filename: './DirectionSnackbar.txt',
  },
];

export default function Snackbar() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Snackbar" menus={demos}>
      {demos.map((menu, index) => {
        const Sandbox = menu.iframe ? IframeWindow : React.Fragment;
        const sandboxProps = menu.iframe ? { title: `${menu.label} demo` } : {};

        return (
          <Box key={index} id={menu.link} className={classes.section}>
            <Typography component="h3" variant="inherit" className={classes.sectionHeading}>
              {menu.label}
            </Typography>
            <CodeViewerCard code={requireRaw(menu.filename).default} language="jsx">
              <Sandbox {...sandboxProps}>{menu.component}</Sandbox>
            </CodeViewerCard>
          </Box>
        );
      })}
    </MuiComponentDemo>
  );
}
