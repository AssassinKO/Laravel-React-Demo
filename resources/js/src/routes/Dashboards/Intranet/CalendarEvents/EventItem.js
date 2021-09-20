import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import LabelIcon from '@material-ui/icons/Label';
import CheckIcon from '@material-ui/icons/Check';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import { getTime } from '../../../../@jumbo/utils/dateHelper';
import useStyles from './index.style';

const EventItem = ({ item }) => {
  const classes = useStyles();

  const getSubTitle = () => (
    <Typography className={classes.subTitleRoot}>
      <Box component="span">{getTime(item.date)}</Box>
      <Box component="span" mx={2}>
        |
      </Box>
      Scheduled with:
      <Box component="span" color="primary.main" ml={1}>
        {item.scheduled_with.name}
      </Box>
    </Typography>
  );

  return (
    <Box className={clsx(classes.eventItemRoot, { checked: item.isAttended })}>
      <CmtMediaObject
        avatarPos="center"
        avatar={<LabelIcon style={{ color: item.color }} />}
        title={item.event_name}
        titleProps={{
          variant: 'h4',
          component: 'div',
          className: classes.titleRoot,
        }}
        subTitle={getSubTitle()}
        actionsComponent={
          item.isAttended && (
            <Box color="success.main">
              <CheckIcon />
            </Box>
          )
        }
      />
    </Box>
  );
};

export default EventItem;
