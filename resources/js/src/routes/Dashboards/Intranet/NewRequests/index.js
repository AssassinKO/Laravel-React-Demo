import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtList from '../../../../@coremat/CmtList';

import RequestItem from './RequestItem';
import ActionSnackBar from './ActionSnackBar';
import { intranet } from '../../../../@fake-db';

const useStyles = makeStyles(() => ({
  cardRoot: {
    position: 'relative',
    '& .Cmt-card-content': {
      padding: 0,
      paddingBottom: 24,
    },
  },
  scrollbarRoot: {
    height: 292,
  },
}));

const NewRequests = () => {
  const classes = useStyles();
  const [requests, setRequests] = useState(intranet.newRequests);
  const [removedRequests, setRemovedRequests] = useState([]);
  const [currentRequest, setCurrentRequest] = useState(null);
  const [currentRequestIndex, setCurrentRequestIndex] = useState(null);
  const [openSnackBar, setSnackBarStatus] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  useEffect(() => {
    if (currentRequest) {
      const data = [...removedRequests];
      data.push(currentRequest);
      setRemovedRequests(data);
      setRequests(requests.filter(item => item.id !== currentRequest.id));
      setSnackBarStatus(true);
    } else {
      setCurrentRequestIndex(null);
      setSnackBarStatus(false);
      setSnackBarMessage('');
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRequest]);

  const reloadRequests = () => {
    setRequests(intranet.newRequests);
  };

  const acceptRequest = (request, index) => {
    setCurrentRequest(request);
    setCurrentRequestIndex(index);
    setSnackBarMessage('');
    setSnackBarMessage('Your Request has been accepted Successfully');
  };

  const rejectRequest = (request, index) => {
    setCurrentRequest(request);
    setCurrentRequestIndex(index);
    setSnackBarMessage('Your Request has been rejected Successfully');
  };

  const onRemovedRequestsUndo = () => {
    const data = [...requests];
    data.splice(currentRequestIndex, 0, currentRequest);
    setRequests(data);
    setRemovedRequests(removedRequests.filter(item => item.id !== currentRequest.id));

    handleCloseSnackBar();
  };

  const handleCloseSnackBar = () => {
    setCurrentRequest(null);
  };

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="New Requests" subTitle="3 This week">
        <IconButton onClick={reloadRequests}>
          <ReplayIcon />
        </IconButton>
      </CmtCardHeader>
      <CmtCardContent>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <CmtList
            data={requests}
            renderRow={(item, index) => {
              return (
                <RequestItem key={index} item={item} onAccept={acceptRequest} onReject={rejectRequest} itemIndex={index} />
              );
            }}
          />
        </PerfectScrollbar>
      </CmtCardContent>

      <ActionSnackBar
        message={snackBarMessage}
        open={openSnackBar}
        onClose={handleCloseSnackBar}
        onUndoAction={onRemovedRequestsUndo}
      />
    </CmtCard>
  );
};

export default NewRequests;
