import React, { useContext, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import CmtBackDrop from '../../../../@coremat/CmtBackDrop';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import TuneIcon from '@material-ui/icons/Tune';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { intranet } from '../../../../@fake-db';
import Box from '@material-ui/core/Box';
import Notifications from './components/Notifications';
import FilterForm from './components/FilterForm';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  scrollbarRoot: {
    height: 368,
  },
}));

const defaultTitle = 'Latest Notifications';
const BackDropView = () => {
  const classes = useStyles();
  const { showConcealedIcon, showExtrasContainer, showSubHeader } = useContext(CorematContext);
  const [title, setTitle] = useState(defaultTitle);
  const [listsToShow, setListsToShow] = useState([]);

  const onRevealedAction = status => {
    setTitle(status ? 'Filter By' : defaultTitle);
  };

  return (
    <CmtBackDrop
      concealedIcon={showConcealedIcon ? <TuneIcon /> : ''}
      backLayerConcealed={title}
      onRevealed={onRevealedAction}
      subHeader={showSubHeader ? <Typography>Sub Headers</Typography> : ''}
      extrasContainer={showExtrasContainer ? <MoreHorizIcon className="pointer" /> : null}
      backLayerRevealed={<FilterForm listsToShow={listsToShow} setListsToShow={setListsToShow} />}>
      <Box pb={4}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <Notifications listsToShow={listsToShow} notifications={intranet.latestNotifications} />
        </PerfectScrollbar>
      </Box>
    </CmtBackDrop>
  );
};

export default BackDropView;
