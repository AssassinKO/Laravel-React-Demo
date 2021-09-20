import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CodeViewerCard from '../../../@jumbo/components/Common/CodeViewerCard';
import BasicExample from './demo/BasicExample';
import DropzoneWithDisabled from './demo/DropzoneWithDisabled';
import OuterDropzone from './demo/OuterDropzone';
import DropzoneWithoutClick from './demo/DropzoneWithoutClick';
import DropzoneWithoutKeyboard from './demo/DropzoneWithoutKeyboard';
import DropzoneWithoutDrag from './demo/DropzoneWithoutDrag';
import StylingDropzone from './demo/StylingDropzone';
import AcceptingSpecificFileType from './demo/AcceptingSpecificFileType';
import OpeningFileDialog from './demo/OpeningFileDialog';
import PreviewsDropzone from './demo/PreviewsDropzone';
import ExtendingDropzone from './demo/ExtendingDropzone';
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

const requireRaw = require.context('!raw-loader!../../../@fake-db/extensions/react-dropzone', false, /\.(txt|js|md|tsx)$/);

const demos = [
  {
    label: 'Basic',
    link: 'basic',
    component: <BasicExample />,
    filename: './BasicExample.txt',
  },
  {
    label: 'Dropzone with disabled',
    link: 'dropzone-with-disabled',
    component: <DropzoneWithDisabled />,
    filename: './DropzoneWithDisabled.txt',
  },
  {
    label: 'Event Propagation',
    link: 'event-propagation',
    component: <OuterDropzone />,
    filename: './OuterDropzone.txt',
  },
  {
    label: 'Dropzone Without Click',
    link: 'dropzone-without-click',
    component: <DropzoneWithoutClick />,
    filename: './DropzoneWithoutClick.txt',
  },
  {
    label: 'Dropzone Without Keyboard',
    link: 'dropzone-without-keyboard',
    component: <DropzoneWithoutKeyboard />,
    filename: './DropzoneWithoutKeyboard.txt',
  },
  {
    label: 'Dropzone Without Drag',
    link: 'dropzone-without-drag',
    component: <DropzoneWithoutDrag />,
    filename: './DropzoneWithoutDrag.txt',
  },
  {
    label: 'Styling Dropzone',
    link: 'styling-dropzone',
    component: <StylingDropzone />,
    filename: './StylingDropzone.txt',
  },
  {
    label: 'Accepting specific file types',
    link: 'accepting-specific-file-types',
    component: <AcceptingSpecificFileType />,
    filename: './AcceptingSpecificFileType.txt',
  },
  {
    label: 'Opening File Dialog Programmatically',
    link: 'opening-file-dialog-programmatically',
    component: <OpeningFileDialog />,
    filename: './OpeningFileDialog.txt',
  },
  {
    label: 'Previews Dropzone',
    link: 'previews-dropzone',
    component: <PreviewsDropzone />,
    filename: './PreviewsDropzone.txt',
  },
  {
    label: 'Extending Dropzone',
    link: 'Extending-dropzone',
    component: <ExtendingDropzone />,
    filename: './ExtendingDropzone.txt',
  },
];

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Extensions', link: '/extensions' },
  { label: 'React Dropzone', isActive: true },
];

const ReactDropzone = () => {
  const classes = useStyles();
  return (
    <ComponentsDemo pageTitle="React Dropzone" menus={demos} breadcrumbs={breadcrumbs}>
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

export default ReactDropzone;
