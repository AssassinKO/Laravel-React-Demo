import React from 'react';
import CmtList from '../../../../@coremat/CmtList';
import Box from '@material-ui/core/Box';
import useStyles from './MailCell.style';
import { alpha } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';

const LabelItem = ({ item, labelsList }) => {
  const label = labelsList.find(label => label.id === item);
  const classes = useStyles();
  return (
    <React.Fragment>
      {label && (
        <Box
          className={classes.badgeRoot}
          component="span"
          style={{
            backgroundColor: `${alpha(label.color, 0.1)}`,
            color: `${label.color}`,
          }}>
          {label.name}
        </Box>
      )}
    </React.Fragment>
  );
};

const MailLabels = ({ mailLabels, labelsList, width }) => {
  return (
    <CmtList
      style={{ display: 'flex' }}
      data={width === 'xl' ? mailLabels.slice(0, 2) : mailLabels.slice(0, 1)}
      renderRow={(item, index) => <LabelItem item={item} key={index} labelsList={labelsList} />}
    />
  );
};

export default withWidth()(MailLabels);

MailLabels.prototype = {
  mailLabels: PropTypes.array.isRequired,
  labelsList: PropTypes.array.isRequired,
};
