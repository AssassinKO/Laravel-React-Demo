import React from 'react';
import WithRedux from './demo/WithRedux/WithRedux';
import { CodeViewerCard } from '../../../../@jumbo/components/Common';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AlphaPickerExample from './demo/AlphaPickerExample';
import PhotoshopPickerExample from './demo/PhotoshopPickerExample';
import MaterialPickerExample from './demo/MaterialPickerExample';
import SwatchesPickerExample from './demo/SwatchesPickerExample';
import SketchPickerExample from './demo/SketchPickerExample';
import TwitterPickerExample from './demo/TwitterPickerExample';
import GithubPickerExample from './demo/GithubPickerExample';
import ChromePickerExample from './demo/ChromePickerExample';
import BlockPickerExample from './demo/BlockPickerExample';
import CompactPickerExample from './demo/CompactPickerExample';
import CirclePickerExample from './demo/CirclePickerExample';
import HuePickerExample from './demo/HuePickerExample';
import BasicPosition from './demo/BasicPosition';
import BasicPickerExample from './demo/BasicPickerExample';
import BasicToggle from './demo/BasicToggle';
import CustomPicker from './demo/CustomPicker/CustomPicker';
import CustomPointer from './demo/CustomPointer/CustomPointer.js';
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
  '!raw-loader!../../../../@fake-db/extensions/pickers/react-color',
  false,
  /\.(txt|js|md|tsx)$/,
);

const demos = [
  {
    label: 'Alpha Pickers',
    link: 'alpha-pickers',
    component: <AlphaPickerExample />,
    filename: './AlphaPickerExample.txt',
  },
  {
    label: 'Hue Pickers',
    link: 'hue-pickers',
    component: <HuePickerExample />,
    filename: './HuePickerExample.txt',
  },
  {
    label: 'Circle Pickers',
    link: 'circle-pickers',
    component: <CirclePickerExample />,
    filename: './CirclePickerExample.txt',
  },
  {
    label: 'Compact Pickers',
    link: 'compact-pickers',
    component: <CompactPickerExample />,
    filename: './CompactPickerExample.txt',
  },
  {
    label: 'Block Pickers',
    link: 'block-pickers',
    component: <BlockPickerExample />,
    filename: './BlockPickerExample.txt',
  },
  {
    label: 'Chrome Pickers',
    link: 'chrome-pickers',
    component: <ChromePickerExample />,
    filename: './ChromePickerExample.txt',
  },
  {
    label: 'Github Pickers',
    link: 'github-pickers',
    component: <GithubPickerExample />,
    filename: './GithubPickerExample.txt',
  },
  {
    label: 'Twitter Pickers',
    link: 'twitter-pickers',
    component: <TwitterPickerExample />,
    filename: './TwitterPickerExample.txt',
  },
  {
    label: 'With Redux',
    link: 'with-redux',
    component: <WithRedux />,
    filename: './WithRedux.txt',
  },
  {
    label: 'Sketch Pickers',
    link: 'sketch-pickers',
    component: <SketchPickerExample />,
    filename: './SketchPickerExample.txt',
  },
  {
    label: 'Swatches Pickers',
    link: 'swatches-pickers',
    component: <SwatchesPickerExample />,
    filename: './SwatchesPickerExample.txt',
  },
  {
    label: 'Basic Positioning',
    link: 'basic-positioning',
    component: <BasicPosition />,
    filename: './BasicPosition.txt',
  },
  {
    label: 'Custom Pickers',
    link: 'custom-pickers',
    component: <CustomPicker />,
    filename: './CustomPicker.txt',
  },
  {
    label: 'Custom Pointer',
    link: 'custom-pointer',
    component: <CustomPointer />,
    filename: './CustomPointer.txt',
  },
  {
    label: 'Material Pickers',
    link: 'material-pickers',
    component: <MaterialPickerExample />,
    filename: './MaterialPickerExample.txt',
  },
  {
    label: 'Basic Toggle',
    link: 'basic-toggle',
    component: <BasicToggle />,
    filename: './BasicToggle.txt',
  },
  {
    label: 'Basic Pickers',
    link: 'basic-pickers',
    component: <BasicPickerExample />,
    filename: './BasicPickerExample.txt',
  },
  {
    label: 'Photoshop Pickers',
    link: 'photoshop-pickers',
    component: <PhotoshopPickerExample />,
    filename: './PhotoshopPickerExample.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Extensions', link: '/extensions' },
  { label: 'Pickers', link: '/extensions/pickers' },
  { label: 'Color Pickers', isActive: true },
];

const ColorPicker = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ComponentsDemo pageTitle="Color Pickers" menus={demos} breadcrumbs={breadcrumbs}>
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

export default ColorPicker;
