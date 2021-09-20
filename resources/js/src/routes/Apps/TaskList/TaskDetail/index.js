import React, { useContext, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import { useSelector } from 'react-redux';
import DetailView from './DetailView';
import Box from '@material-ui/core/Box';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getTaskDetailContainerHeight } from '../../../../@jumbo/constants/AppConstants';
import DetailHeader from './DetailHeader';
import AddComment from '../CommentView/AddComment';
import { withWidth } from '@material-ui/core';
import AppContext from '../../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles(theme => ({
  taskDetailRoot: {
    marginLeft: 24,
    transition: 'all 0.3s ease',
    minWidth: 300,
    flex: '0 1 530px',
    '@media screen and (min-width: 1500px)': {
      minWidth: 380,
    },
    [theme.breakpoints.up('xl')]: {
      minWidth: 530,
    },
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      left: 72,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 1,
      marginLeft: 0,
      minWidth: 240,
      '& > div': {
        height: '100%',
      },
    },
  },
  cardRoot: {
    position: 'relative',
  },
  perfectScrollbarTaskDetail: {
    height: props => `calc(100vh - ${props.height}px)`,
  },
  dialogRoot: {
    '& .MuiDialog-paperWidthSm': {
      width: '100%',
      maxWidth: 980,
    },
  },
}));

const TaskDetail = ({ width }) => {
  const { showFooter } = useContext(AppContext);
  const { currentTask } = useSelector(({ taskList }) => taskList);
  const [showingComments, setShowingComments] = useState(2);
  const [showFullView, setShowFullView] = useState(false);

  const classes = useStyles({
    height: getTaskDetailContainerHeight(width, showFooter),
  });

  const handleCloseFullView = () => {
    setShowFullView(false);
  };

  const handleFullScreenView = () => {
    setShowFullView(true);
  };

  return currentTask ? (
    <React.Fragment>
      <Box className={classes.taskDetailRoot}>
        <Card className={classes.cardRoot}>
          <DetailHeader currentTask={currentTask} onClickFullScreen={handleFullScreenView} />
          <PerfectScrollbar className={classes.perfectScrollbarTaskDetail}>
            <DetailView showingComments={showingComments} setShowingComments={setShowingComments} />
          </PerfectScrollbar>
          <AddComment showingComments={showingComments} setShowingComments={setShowingComments} />
        </Card>
      </Box>

      <Dialog className={classes.dialogRoot} onClose={handleCloseFullView} aria-labelledby="task-detail" open={showFullView}>
        <Card className={classes.cardRoot}>
          <DetailHeader currentTask={currentTask} onCloseDetail={handleCloseFullView} />
          <PerfectScrollbar className={classes.perfectScrollbarTaskDetail}>
            <DetailView />
          </PerfectScrollbar>
          <AddComment showingComments={showingComments} setShowingComments={setShowingComments} />
        </Card>
      </Dialog>
    </React.Fragment>
  ) : null;
};

export default withWidth()(TaskDetail);
