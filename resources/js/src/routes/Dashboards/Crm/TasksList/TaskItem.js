import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';

import { Grid, Box, Tooltip, Typography, Checkbox } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import CmtList from '../../../../@coremat/CmtList';

import GridContainer from '../../../../@jumbo/components/GridContainer';
import { crm } from '../../../../@fake-db';

const useStyles = makeStyles(theme => ({
  taskItemRoot: {
    padding: '7px 24px 7px 12px',
    transition: 'all .2s',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.04),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& $titleRoot': {
        color: theme.palette.text.primary,
      },
    },
  },
  titleRoot: {
    color: theme.palette.text.disabled,
    fontSize: 16,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },
  dots: {
    height: 8,
    width: 8,
    borderRadius: '50%',
    marginRight: 10,
  },
  gridItemCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-end',
    },
  },
  tag_danger: {
    backgroundColor: theme.palette.error.main,
  },
  tag_success: {
    backgroundColor: theme.palette.success.main,
  },
  tag_info: {
    backgroundColor: theme.palette.info.main,
  },
  tag_warning: {
    backgroundColor: theme.palette.warning.main,
  },
}));
const TaskItem = ({ item }) => {
  const [isCompleted, setIsCompleted] = useState(item.completed);
  const { taskTags } = crm;

  const getDateText = () => {
    const date = item.dueDate;
    if (moment().isSame(date, 'day')) {
      return (
        <span className={'ml-3'} style={{ fontSize: 12, fontWeight: 'fontWeightBold' }}>
          Today
        </span>
      );
    } else if (
      moment()
        .subtract(1, 'days')
        .isSame(date, 'day')
    ) {
      return (
        <Box component="span" ml={3} fontSize={12} color="error.main" fontWeight="fontWeightBold">
          Yesterday
        </Box>
      );
    } else {
      return (
        <span className={'ml-3'} style={{ fontSize: 12, fontWeight: 'fontWeightBold' }}>
          {moment(date).format('DD MMM')}
        </span>
      );
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.taskItemRoot}>
      <GridContainer>
        <Grid item xs={12} sm={8}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={'mr-2'}>
              <Checkbox checked={isCompleted} onChange={e => setIsCompleted(e.target.checked)} />
            </div>
            <Typography className={classes.titleRoot}>{item.description}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.gridItemCenter}>
          <Box display="flex" alignItems="center" pl={{ xs: 3.5, sm: 0 }} mt={{ xs: -3, sm: 0 }}>
            <CmtList
              style={{ display: 'flex' }}
              data={item.tags}
              renderRow={(item, index) => {
                const selectedTag = taskTags.find(tag => tag.id === item);
                return (
                  <Tooltip title={selectedTag.name} key={index}>
                    <Box className={clsx(classes.dots, classes[`tag_${selectedTag.color}`])} />
                  </Tooltip>
                );
              }}
            />
            <div className={'ml-4'}>
              {item.user.profilePic ? (
                <CmtAvatar size={24} src={item.user.profilePic} alt={item.user.name} />
              ) : (
                <CmtAvatar size={24} alt={item.user.name}>
                  {item.user.name.charAt(0)}
                </CmtAvatar>
              )}
            </div>
            {getDateText()}
          </Box>
        </Grid>
      </GridContainer>
    </div>
  );
};

export default TaskItem;
