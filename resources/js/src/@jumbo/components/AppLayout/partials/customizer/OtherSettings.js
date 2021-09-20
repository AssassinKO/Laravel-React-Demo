import CmtCard from '../../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../../@coremat/CmtCard/CmtCardContent';
import { List, ListItem, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import AppSwitch from '../../../Common/formElements/AppSwitch';
import AppContext from '../../../contextProvider/AppContextProvider/AppContext';
import PropTypes from 'prop-types';
import LayoutContext from '../../../../../@coremat/CmtLayouts/LayoutContext';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-header-root': {
      padding: '16px 16px 8px',
    },
    '& .Cmt-card-content': {
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 16,
    },
  },
}));

const OtherSettings = () => {
  const classes = useStyles();
  const { direction, setDirection, showTourGuide, setTourGuideStatus } = useContext(AppContext);
  const { showFooter, setShowFooter, showTourOpt, showFooterOpt } = useContext(LayoutContext);

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="Other Settings" />

      <CmtCardContent>
        <List disablePadding>
          <ListItem disableGutters divider>
            <AppSwitch
              label="Layout Orientation (RTL)"
              checked={direction === 'rtl'}
              onChange={event => setDirection(event.target.checked ? 'rtl' : 'ltr')}
            />
          </ListItem>
          {showFooterOpt && (
            <ListItem disableGutters divider>
              <AppSwitch label="Show Footer" checked={showFooter} onChange={event => setShowFooter(event.target.checked)} />
            </ListItem>
          )}
          {showTourOpt && (
            <ListItem disableGutters divider>
              <AppSwitch
                label="Show Tour Guide"
                checked={showTourGuide}
                onChange={event => setTourGuideStatus(event.target.checked)}
              />
            </ListItem>
          )}
        </List>
      </CmtCardContent>
    </CmtCard>
  );
};

OtherSettings.prototype = {
  showTourOpt: PropTypes.boolean,
  showFooterOpt: PropTypes.boolean,
};

OtherSettings.defaultProps = {
  showTourOpt: false,
  showFooterOpt: true,
};

export default OtherSettings;
