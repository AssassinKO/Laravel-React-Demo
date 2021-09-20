import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../index.style';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { filterOptions, folderList } from '../../../../@fake-db/apps/mail';
import ListItem from '@material-ui/core/ListItem';
import CmtList from '../../../../@coremat/CmtList';
import List from '@material-ui/core/List';
import ItemCell from './ItemCell';
import ConnectionCell from './ConnectionCell';
import { getConnectionsList, getLabelsList, getMailCounts, setFilterType } from '../../../../redux/actions/MailApp';
import AddLabel from './AddLabel';
import PropTypes from 'prop-types';
import { withWidth } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getAppSidebarHeight } from '../../../../@jumbo/constants/AppConstants';
import EditIcon from '@material-ui/icons/Edit';
import AppContext from '../../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';
import LabelCell from './LabelCell';

const Sidebar = ({ width, onOpenComposeDialog, onClickSendMail }) => {
  const { showFooter } = useContext(AppContext);
  const { isSideBarCollapsed, labelsList, connectionsList, filterType, mailsList, selectedMail, counter } = useSelector(
    ({ mailApp }) => mailApp,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLabelsList());
    dispatch(getConnectionsList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMailCounts());
  }, [dispatch, mailsList, selectedMail]);

  const onChangeFolder = folder => {
    dispatch(
      setFilterType({
        selectedFolder: folder,
        selectedFilter: '',
        selectedLabel: '',
        searchText: '',
        page: 0,
      }),
    );
  };

  const onChangeFilter = filter => {
    dispatch(
      setFilterType({
        selectedFolder: '',
        selectedFilter: filter,
        selectedLabel: '',
        searchText: '',
        page: 0,
      }),
    );
  };

  const onChangeLabel = label => {
    dispatch(
      setFilterType({
        selectedFolder: '',
        selectedFilter: '',
        selectedLabel: label,
        searchText: '',
        page: 0,
      }),
    );
  };

  const classes = useStyles({
    isCollapsed: isSideBarCollapsed,
    height: getAppSidebarHeight(width, showFooter),
  });

  return (
    <Box className={classes.inBuildAppSidebar}>
      <Box className={classes.inBuildAppSidebarHeader}>
        <Button className={classes.addTaskBtn} variant="contained" color="primary" onClick={() => onOpenComposeDialog()}>
          <EditIcon />
          <Box component="span" className="add-task-btn-text">
            Compose
          </Box>
        </Button>
      </Box>
      <PerfectScrollbar className={classes.perfectScrollbarMailSidebar}>
        <List component="nav" className={classes.appNav}>
          <CmtList
            data={folderList}
            renderRow={(item, index) => (
              <ItemCell
                key={index}
                item={item}
                counter={counter ? counter.folders[item.slug] : 0}
                classes={classes}
                selectedItem={filterType.selectedFolder}
                onChange={onChangeFolder}
              />
            )}
          />

          <ListItem component="div" className={classes.appNavHeaderItem}>
            <Box component="span" className={classes.appNavHeaderItemText}>
              Filters
            </Box>
          </ListItem>

          <CmtList
            data={filterOptions}
            renderRow={(item, index) => (
              <ItemCell
                key={index}
                item={item}
                counter={counter ? counter.filters[item.slug] : 0}
                classes={classes}
                selectedItem={filterType.selectedFilter}
                onChange={onChangeFilter}
              />
            )}
          />

          <ListItem component="div" className={classes.appNavHeaderItem}>
            <Box component="span" className={classes.appNavHeaderItemText}>
              Labels
            </Box>
          </ListItem>

          <CmtList
            data={labelsList}
            renderRow={(item, index) => (
              <LabelCell
                key={index}
                item={item}
                classes={classes}
                selectedItem={filterType.selectedLabel}
                onChange={onChangeLabel}
              />
            )}
          />

          <AddLabel />

          <ListItem component="div" className={classes.appNavHeaderItem}>
            <Box component="span" className={classes.appNavHeaderItemText}>
              Connections
            </Box>
          </ListItem>

          <CmtList
            style={{ marginBottom: 10 }}
            data={connectionsList}
            renderRow={(item, index) => <ConnectionCell key={index} item={item} onClickSendMail={onClickSendMail} />}
          />
        </List>
      </PerfectScrollbar>
    </Box>
  );
};

export default withWidth()(Sidebar);

Sidebar.prototype = {
  onOpenComposeDialog: PropTypes.func,
};
