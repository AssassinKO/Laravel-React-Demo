import React, { useState } from 'react';
import CmtBackDrop from '../../../../@coremat/CmtBackDrop';
import { intranet } from '../../../../@fake-db';
import PerfectScrollbar from 'react-perfect-scrollbar';
import TuneIcon from '@material-ui/icons/Tune';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FilterForm from './FilterForm';
import Notifications from './Notifications';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  scrollbarRoot: {
    height: 368,
  },
}));

const defaultTitle = 'Latest Notifications';
const LatestNotifications = () => {
  const [title, setTitle] = useState(defaultTitle);
  const [listsToShow, setListsToShow] = useState([]);
  const classes = useStyles();

  const onRevealedAction = status => {
    setTitle(status ? 'Filter By' : defaultTitle);
  };

  return (
    <CmtBackDrop
      concealedIcon={<TuneIcon />}
      backLayerConcealed={title}
      onRevealed={onRevealedAction}
      extrasContainer={<MoreHorizIcon />}
      backLayerRevealed={<FilterForm listsToShow={listsToShow} setListsToShow={setListsToShow} />}>
      <Box pb={4}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <Notifications listsToShow={listsToShow} notifications={intranet.latestNotifications} />
        </PerfectScrollbar>
      </Box>
    </CmtBackDrop>
  );
};

export default LatestNotifications;
