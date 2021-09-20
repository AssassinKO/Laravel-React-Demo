import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import SimpleAccordion from './demo/SimpleAccordion';
import ControlledAccordions from './demo/ControlledAccordions';
import CustomizedAccordions from './demo/CustomizedAccordions';
import ActionsInAccordionSummary from './demo/ActionsInAccordionSummary';
import DetailedAccordion from './demo/DetailedAccordion';

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

const requireRaw = require.context('!raw-loader!../../../../@fake-db/mui-components/accordion', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Simple accordion',
    link: 'simple-accordion',
    component: <SimpleAccordion />,
    filename: './SimpleAccordion.txt',
  },
  {
    label: 'Controlled accordion',
    link: 'controlled-accordion',
    component: <ControlledAccordions />,
    filename: './ControlledAccordions.txt',
  },
  {
    label: 'Customized accordions',
    link: 'customized-accordions',
    component: <CustomizedAccordions />,
    filename: './CustomizedAccordions.txt',
  },
  {
    label: 'Additional actions',
    link: 'additional-actions',
    component: <ActionsInAccordionSummary />,
    filename: './ActionsInAccordionSummary.txt',
  },
  {
    label: 'Secondary heading and columns',
    link: 'secondary-heading-and-columns',
    component: <DetailedAccordion />,
    filename: './DetailedAccordion.txt',
  },
];

export default function Accordion() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Accordion" menus={demos}>
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
