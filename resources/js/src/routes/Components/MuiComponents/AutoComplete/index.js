import React from 'react';
import { MuiComponentDemo } from '../../../../@jumbo/components/PageComponents';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../../@jumbo/components/Common/CodeViewerCard';
import ComboBox from './demo/ComboBox';
import Playground from './demo/Playground';
import CountrySelect from './demo/CountrySelect';
import ControllableStates from './demo/ControllableStates';
import FreeSolo from './demo/FreeSolo';
import FreeSoloCreateOption from './demo/FreeSoloCreateOption';
import FreeSoloCreateOptionDialog from './demo/FreeSoloCreateOptionDialog';
import Grouped from './demo/Grouped';
import DisabledOptions from './demo/DisabledOptions';
import UseAutocomplete from './demo/UseAutocomplete';
import CustomizedHook from './demo/CustomizedHook';
import Asynchronous from './demo/Asynchronous';
import GoogleMaps from './demo/GoogleMaps';
import Tags from './demo/Tags';
import FixedTags from './demo/FixedTags';
import CheckboxesTags from './demo/CheckboxesTags';
import LimitTags from './demo/LimitTags';
import Sizes from './demo/Sizes';
import CustomInputAutocomplete from './demo/CustomInputAutocomplete';
import GitHubLabel from './demo/GitHubLabel';
import Highlights from './demo/Highlights';
import Filter from './demo/Filter';
import Virtualize from './demo/Virtualize';

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
  '!raw-loader!../../../../@fake-db/mui-components/auto-complete',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Combo Box',
    link: 'combo-box',
    component: <ComboBox />,
    filename: './ComboBox.txt',
  },
  {
    label: 'Playground',
    link: 'playground',
    component: <Playground />,
    filename: './Playground.txt',
  },
  {
    label: 'Country select',
    link: 'country-select',
    component: <CountrySelect />,
    filename: './CountrySelect.txt',
  },
  {
    label: 'Controllable states',
    link: 'controllable-states',
    component: <ControllableStates />,
    filename: './ControllableStates.txt',
  },
  {
    label: 'Free Solo Search input',
    link: 'free-solo-search-input',
    component: <FreeSolo />,
    filename: './FreeSolo.txt',
  },
  {
    label: 'Free Solo Creatable',
    link: 'free-solo-creatable',
    component: <FreeSoloCreateOption />,
    filename: './FreeSoloCreateOption.txt',
  },
  {
    label: 'Free Solo Creatable Dialog',
    link: 'free-solo-creatable-dialog',
    component: <FreeSoloCreateOptionDialog />,
    filename: './FreeSoloCreateOptionDialog.txt',
  },
  {
    label: 'Grouped',
    link: 'grouped',
    component: <Grouped />,
    filename: './Grouped.txt',
  },
  {
    label: 'Disabled options',
    link: 'disabled-options',
    component: <DisabledOptions />,
    filename: './DisabledOptions.txt',
  },
  {
    label: 'useAutocomplete',
    link: 'use-autocomplete',
    component: <UseAutocomplete />,
    filename: './UseAutocomplete.txt',
  },
  {
    label: 'Customized hook',
    link: 'customized-hook',
    component: <CustomizedHook />,
    filename: './CustomizedHook.txt',
  },
  {
    label: 'Asynchronous requests',
    link: 'asynchronous-requests',
    component: <Asynchronous />,
    filename: './Asynchronous.txt',
  },
  {
    label: 'Google Maps place',
    link: 'google-maps-place',
    component: <GoogleMaps />,
    filename: './GoogleMaps.txt',
  },
  {
    label: 'Multiple values',
    link: 'multiple-values',
    component: <Tags />,
    filename: './Tags.txt',
  },
  {
    label: 'Fixed options',
    link: 'Fixed options',
    component: <FixedTags />,
    filename: './FixedTags.txt',
  },
  {
    label: 'Checkboxes',
    link: 'checkboxes',
    component: <CheckboxesTags />,
    filename: './CheckboxesTags.txt',
  },
  {
    label: 'Limit tags',
    link: 'limit-tags',
    component: <LimitTags />,
    filename: './LimitTags.txt',
  },
  {
    label: 'Sizes',
    link: 'sizes',
    component: <Sizes />,
    filename: './Sizes.txt',
  },
  {
    label: 'Custom input',
    link: 'custom-input',
    component: <CustomInputAutocomplete />,
    filename: './CustomInputAutocomplete.txt',
  },
  {
    label: "GitHub's picker",
    link: 'githubs-picker',
    component: <GitHubLabel />,
    filename: './GitHubLabel.txt',
  },
  {
    label: 'Highlights',
    link: 'highlights',
    component: <Highlights />,
    filename: './Highlights.txt',
  },
  {
    label: 'Custom filter',
    link: 'custom-filter',
    component: <Filter />,
    filename: './Filter.txt',
  },
  {
    label: 'Virtualization',
    link: 'virtualization',
    component: <Virtualize />,
    filename: './Virtualize.txt',
  },
];

export default function AutoComplete() {
  const classes = useStyles();
  return (
    <MuiComponentDemo pageTitle="Autocomplete" menus={demos}>
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
