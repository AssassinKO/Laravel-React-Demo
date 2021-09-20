import React from 'react';
import { darken, emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledBreadcrumb = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: theme.spacing(6),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: darken(theme.palette.background.default, 0.12),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb component="a" href="#" label="Home" icon={<HomeIcon fontSize="small" />} onClick={handleClick} />
      <StyledBreadcrumb component="a" href="#" label="Catalog" onClick={handleClick} />
      <StyledBreadcrumb label="Accessories" deleteIcon={<ExpandMoreIcon />} onClick={handleClick} onDelete={handleClick} />
    </Breadcrumbs>
  );
}
