import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, withWidth } from '@material-ui/core';
import useStyles from '../index.style';
import MailCell from './MailCell';
import CmtList from '../../../../@coremat/CmtList';
import { getMailsList } from '../../../../redux/actions/MailApp';
import ListHeader from './ListHeader';
import PropTypes from 'prop-types';
import { getMailContainerHeight } from '../../../../@jumbo/constants/AppConstants';
import PerfectScrollbar from 'react-perfect-scrollbar';
import AppContext from '../../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';
import ListEmptyResult from '../../../../@coremat/CmtList/ListEmptyResult';
import EmptyMailsResult from './EmptyMailsResult';

const MailsList = ({ width, onClickSendMail, onClickForwardMail, viewMode }) => {
  const { showFooter } = useContext(AppContext);
  const dispatch = useDispatch();
  const { mailsList, labelsList, filterType } = useSelector(({ mailApp }) => mailApp);
  const { loading } = useSelector(({ common }) => common);
  const [checkedMails, setCheckedMails] = useState([]);
  const totalMails = useMemo(() => mailsList.length, [mailsList]);

  useEffect(() => {
    dispatch(getMailsList(filterType));
  }, [filterType, dispatch]);

  const onChangeCheckedMails = (isChecked, id) => {
    if (isChecked) {
      setCheckedMails(checkedMails.concat(id));
    } else {
      setCheckedMails(checkedMails.filter(mailId => mailId !== id));
    }
  };

  const classes = useStyles({
    height: getMailContainerHeight(width, showFooter),
  });
  return (
    <Box className={classes.inBuildAppMainContent}>
      {totalMails > 0 && <ListHeader checkedMails={checkedMails} setCheckedMails={setCheckedMails} />}
      {totalMails === 0 && <Box style={{ height: 39 }} />}
      <PerfectScrollbar className={classes.perfectScrollbarMailCon}>
        <CmtList
          data={mailsList}
          renderRow={(item, index) => (
            <MailCell
              key={index}
              mail={item}
              labelsList={labelsList}
              checkedMails={checkedMails}
              onChangeCheckedMails={onChangeCheckedMails}
              onClickSendMail={onClickSendMail}
              onClickForwardMail={onClickForwardMail}
              viewMode={viewMode}
            />
          )}
          ListEmptyComponent={
            <ListEmptyResult loader={loading}>
              <EmptyMailsResult />
            </ListEmptyResult>
          }
        />
      </PerfectScrollbar>
    </Box>
  );
};

export default withWidth()(MailsList);

MailsList.prototype = {
  onClickSendMail: PropTypes.func,
  onClickForwardMail: PropTypes.func,
  viewMode: PropTypes.string,
};

MailsList.defaultProps = {
  viewMode: 'detail',
};
